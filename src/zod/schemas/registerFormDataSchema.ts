import { z } from 'zod'
import { usernameSchema } from './utils/usernameSchema'
import { passwordSchema } from './utils/passwordSchema'
import { nameSchema } from './utils/nameSchema'
import { emailSchema } from './utils/emailSchema'

export const registerFormDataSchema = z.object({
  name: nameSchema,
  username: usernameSchema,
  password: passwordSchema,
  email: emailSchema,
  isChecked: z.boolean().optional(),
})
