import { z } from 'zod'

export const enterDisciplineFormDataSchema = z.object({
  idUser: z.number(),
  idDiscipline: z.number(),
  isChecked: z.boolean(),
})
