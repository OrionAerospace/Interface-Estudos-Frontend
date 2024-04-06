import { z } from 'zod'

export const universitySchema = z
  .string()
  .min(3, 'A universidade deve ter no mínimo 3 caracteres')
  .max(255, 'A universidade deve ter no máximo 255 caracteres')
