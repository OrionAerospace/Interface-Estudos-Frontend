import { z } from 'zod'

export const usernameSchema = z
  .string()
  .min(3, { message: 'O usuário deve ter pelo menos 3 caracteres' })
  .max(255, { message: 'O usuário deve ter no máximo 255 caracteres' })
