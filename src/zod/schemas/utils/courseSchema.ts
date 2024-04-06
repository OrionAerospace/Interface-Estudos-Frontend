import { z } from 'zod'

export const courseSchema = z
  .string()
  .min(3, 'O curso deve ter no mínimo 3 caracteres')
  .max(255, 'O curso deve ter no máximo 255 caracteres')
