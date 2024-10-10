import { z } from 'zod'

export const questionSchema = z.object({
  question: z.string().min(1, 'Enunciado é obrigatório'),
  details: z.string().optional(),
  response: z.string().min(1, 'Resposta é obrigatória'),
  exerciseType: z.string().min(1, 'Tipo de Exercício é obrigatório'),
  subject: z.string().optional(),
  lessonNumber: z.string().optional(),
  tags: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .max(3, 'Você pode adicionar no máximo 3 tags')
    .optional(),
})
