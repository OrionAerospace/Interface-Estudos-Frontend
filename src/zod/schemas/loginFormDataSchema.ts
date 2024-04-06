import { z } from 'zod'
import { usernameSchema } from './utils/usernameSchema'
import { passwordSchema } from './utils/passwordSchema'

export const loginFormDataSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
  isChecked: z.boolean(),
})
