import { z } from 'zod'

export const passwordSchema = z
  .string()
  .min(3, { message: 'A senha deve ter pelo menos 3 caracteres' })
  .max(255, { message: 'A senha deve ter no máximo 255 caracteres' })
