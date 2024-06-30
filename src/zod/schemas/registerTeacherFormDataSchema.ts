import { z } from 'zod'
import { usernameSchema } from './utils/usernameSchema'
import { passwordSchema } from './utils/passwordSchema'
import { nameSchema } from './utils/nameSchema'
import { emailSchema } from './utils/emailSchema'
import { citySchema } from './utils/citySchema'

export const registerTeacherFormDataSchema = z
  .object({
    fullName: nameSchema,
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    email: emailSchema,
    city: citySchema,
    isChecked: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
