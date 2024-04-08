import { z } from 'zod'
import { usernameSchema } from './utils/usernameSchema'
import { passwordSchema } from './utils/passwordSchema'
import { nameSchema } from './utils/nameSchema'
import { emailSchema } from './utils/emailSchema'
import { courseSchema } from './utils/courseSchema'
import { citySchema } from './utils/citySchema'
import { universitySchema } from './utils/universitySchema'

export const registerFormDataSchema = z
  .object({
    name: nameSchema,
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    email: emailSchema,
    course: courseSchema,
    city: citySchema,
    university: universitySchema,
    isChecked: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })
