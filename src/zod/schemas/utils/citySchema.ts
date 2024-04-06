import { z } from 'zod'

export const citySchema = z
  .string()
  .min(3, 'A cidade deve ter no mínimo 3 caracteres')
  .max(255, 'A cidade deve ter no máximo 255 caracteres')
