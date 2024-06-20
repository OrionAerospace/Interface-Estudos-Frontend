import { z } from 'zod'

export const departmentSchema = z
  .string()
  .min(3, 'O departamento deve ter no mínimo 3 caracteres')
  .max(255, 'O departamento deve ter no máximo 255 caracteres')
