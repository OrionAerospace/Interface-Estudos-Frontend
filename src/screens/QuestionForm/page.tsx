import React, { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormControl, FormLabel, FormItem, FormField, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useQuestion } from '@/services/QuestionService'
import { Tag } from '@/types/Tags/Tags'
import { Question, QuestionBase } from '@/types/Questions/Question'
import { useToast } from '@/components/ui/use-toast'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { questionSchema } from '@/zod/schemas/utils/questionSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface QuestionFormProps {
  addQuestion: (newQuestion: Question) => void
}

export function QuestionForm({ addQuestion }: QuestionFormProps) {
  const methods = useForm<QuestionBase>({
    resolver: zodResolver(questionSchema),
  })
  const { handleSubmit, control, watch, reset } = methods
  const { toast } = useToast()
  const { addQuestion: addQuestionService } = useQuestion()

  const [tags, setTags] = useState<Tag[]>([])
  const [tagInput, setTagInput] = useState<string>('')

  const onSubmit: SubmitHandler<QuestionBase> = async (data) => {
    const newQuestion: QuestionBase = {
      ...data,
      tags,
    }

    try {
      const response = await addQuestionService(newQuestion)
      addQuestion(response.data)
      toast({
        title: 'Successo',
        description: 'Questão Criada com sucesso!',
      })
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Falha ao criar a questão',
      })
    }

    reset()
    setTags([])
    setTagInput('')
  }
  const handleAddTag = () => {
    if (tagInput && !tags.some((tag) => tag.name === tagInput) && tags.length < 3) {
      setTags([...tags, { id: `${Date.now()}`, name: tagInput }])
      setTagInput('')
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          defaultValue=""
          control={control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enunciado:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhamento/Explicação:</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          defaultValue=""
          control={control}
          name="response"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resposta:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          defaultValue=""
          control={control}
          name="exerciseType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Exercício:</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de exercício" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fixation">Tipo fixação</SelectItem>
                    <SelectItem value="generic">Tipo genérico</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {watch('exerciseType') === 'fixation' && (
          <>
            <FormField
              defaultValue=""
              control={control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disciplina:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              defaultValue=""
              control={control}
              name="lessonNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número da aula:</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <FormItem>
          <FormLabel>Tags (até 3):</FormLabel>
          <div>
            {tags.map((tag, index) => (
              <span key={index}>{tag.name}</span>
            ))}
          </div>
          <FormControl>
            <Input value={tagInput} onChange={(e) => setTagInput(e.target.value)} />
          </FormControl>
          <Button type="button" onClick={handleAddTag}>
            Criar Tag
          </Button>
        </FormItem>

        <Button type="submit">Criar Questão</Button>
      </form>
    </FormProvider>
  )
}
