import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { FormLabel, FormItem, FormField, FormMessage, FormControl } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useQuestion } from '@/services/QuestionService'
import { QuestionBase } from '@/types/Questions/Question'
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
import { MultiSelect } from '@/components/ui/multiselect'
import { Tag } from '@/types/Tags/Tags'

export function QuestionForm() {
  const methods = useForm<QuestionBase>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      tags: [], // Inicializa as tags como um array vazio
    },
  })
  const { handleSubmit, control, reset, watch } = methods
  const { toast } = useToast()
  const { addQuestion: addQuestionService } = useQuestion()

  const onSubmit: SubmitHandler<QuestionBase> = async (data) => {
    try {
      // Adiciona a nova questão
      /*const response =*/ await addQuestionService(data)

      // Exibe a questão criada no console
      //console.log('Questão criada:', response.data)

      // Mostra uma notificação de sucesso
      toast({
        title: 'Sucesso',
        description: 'Questão criada com sucesso!',
      })
    } catch (error) {
      // Mostra uma notificação de erro
      toast({
        title: 'Erro',
        description: 'Falha ao criar a questão',
      })
    }

    // Reseta o formulário
    reset()
  }
  function transformTagsToStringArray(tags: Tag[]): string[] {
    return tags.map((tag) => tag.name) // ou outra propriedade que faça sentido para a conversão
  }

  return (
    <FormProvider {...methods}>
      <div className="flex justify-center items-center gap-4">
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

          {/* Adicionando o MultiSelect para as tags */}
          <FormField
            control={control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags:</FormLabel>
                <FormControl>
                  <MultiSelect
                    value={
                      Array.isArray(field.value)
                        ? transformTagsToStringArray(field.value as Tag[])
                        : []
                    }
                    onValueChange={(selected: string[]) => field.onChange(selected)}
                    options={[]} // Sem opções no momento
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Criar Questão</Button>
        </form>
      </div>
    </FormProvider>
  )
}
