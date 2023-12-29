import { z } from 'zod'

export const nameSchema = z
  .string()
  .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  .max(255, { message: 'O nome deve ter no máximo 255 caracteres' })
