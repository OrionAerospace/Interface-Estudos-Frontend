import React, { useState } from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormControl } from '@/components/ui/form'
import { FormLabel } from '@/components/ui/form'
import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { mockAddQuestion } from '@/services/QuestionService'
import { Tag } from '@/types/Tags/Tags'
import { Question, QuestionBase } from '@/types/Questions/Question'
import { QuestionFormProps } from '@/types/Questions/QuestionFormProps'

export function QuestionForm({ addQuestion }: QuestionFormProps) {
  const methods = useForm<QuestionBase>()
  const { handleSubmit, register, watch } = methods

  const [tags, setTags] = useState<Tag[]>([])
  const [tagInput, setTagInput] = useState<string>('')

  // Verefica os campos do formulário para garantir que estejam preenchidos
  const question = watch('question')
  const response = watch('response')
  const exerciseType = watch('exerciseType')
  const details = watch('details')
  const subject = watch('subject')
  const lessonNumber = watch('lessonNumber')

  // Determinar se o formulário está pronto para ser enviado
  const isFormReady =
    question &&
    response &&
    exerciseType &&
    details &&
    (exerciseType === 'generic' || (subject && lessonNumber)) &&
    tags.length > 0

  const onSubmit: SubmitHandler<QuestionBase> = async (data) => {
    const newQuestion: Question = {
      id: `${Date.now()}`, // Gerar ID exclusivo com base no timestamp
      ...data,
      tags,
      creatorId: 'exampleCreatorId',
      creationDate: new Date().toISOString(),
      displayNumber: 1,
      correctCount: 0,
      incorrectCount: 0,
    }

    try {
      const response = await mockAddQuestion(newQuestion)
      addQuestion(response.data)
      toast.success('Questão criada com sucesso!')
    } catch (error) {
      toast.error('Falha ao criar questão')
    }

    methods.reset()
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
        <FormItem>
          <FormLabel>Enunciado:</FormLabel>
          <FormControl>
            <Input {...register('question', { required: true })} />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Detalhamento/Explicação (link de vídeo, imagem ou texto):</FormLabel>
          <FormControl>
            <Textarea {...register('details', { required: true })} />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Resposta:</FormLabel>
          <FormControl>
            <Input {...register('response', { required: true })} />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>Tipo de Exercício:</FormLabel>
          <FormControl>
            <select {...register('exerciseType', { required: true })}>
              <option value="">Selecione o tipo de exercício</option>
              <option value="fixation">Tipo fixação</option>
              <option value="generic">Tipo genérico</option>
            </select>
          </FormControl>
        </FormItem>

        {exerciseType === 'fixation' && (
          <>
            <FormItem>
              <FormLabel>Disciplina:</FormLabel>
              <FormControl>
                <Input {...register('subject', { required: true })} />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Número da aula:</FormLabel>
              <FormControl>
                <Input {...register('lessonNumber', { required: true })} />
              </FormControl>
            </FormItem>
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
            Adicionar Tag
          </Button>
        </FormItem>

        <Button type="submit" disabled={!isFormReady}>
          Criar Questão
        </Button>

        <ToastContainer />
      </form>
    </FormProvider>
  )
}
