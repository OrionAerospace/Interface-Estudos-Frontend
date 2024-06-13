import { z } from 'zod'

export const enterDisciplineFormDataSchema = z.object({
  iduser: z.number(),
  iddiscipline: z.number(),
  isChecked: z.boolean(),
})
