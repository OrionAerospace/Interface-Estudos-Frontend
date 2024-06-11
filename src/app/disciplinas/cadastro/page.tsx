'use client'

import styles from './styles.module.scss'
import { useUser } from '@/services/UserService'
import { z } from 'zod'
import { registerFormDataSchema } from '@/zod/schemas/registerFormDataSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/Form'
import { useState } from 'react'

type registerFormData = z.infer<typeof registerFormDataSchema>

export default function Register() {
  const { register } = useUser()

  const registerUserForm = useForm<registerFormData>({
    resolver: zodResolver(registerFormDataSchema),
  })
  const { handleSubmit, setValue } = registerUserForm

  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: '',
  })

  async function submit(data: registerFormData) {
    const res = await register(data, data.isChecked)

    if (res.error) {
      setErrorMessage({ error: true, message: res.message })
      return
    }

    setValue('email', '')
    setValue('password', '')
    setValue('fullName', '')
    setValue('username', '')
    setValue('course', '')
    setValue('city', '')
    setValue('confirmPassword', '')
    setValue('isChecked', false)
  }

  return (
    <div className={styles['container']}>
      <aside className={styles['left-section']}>
        <img src="/assets/images/orion.png" alt="Logo da OrionAerospace" className="w-64" />
      </aside>
      <main className={styles['right-section']}>
        <Form.Root form={registerUserForm} onSubmit={handleSubmit(submit)}>
          <Form.Title className="mb-4 2xl:mb-12 tracking-widest" Tag="h1">
            ENTRAR NA DISCIPLINA
          </Form.Title>
          <div className="flex gap-4">
            <Form.Input name="fullName" field="Nome Completo" />
          </div>
          <div className="flex gap-4"></div>
          <div className="flex gap-4"></div>
          <div className="flex gap-4"></div>
          {errorMessage.error && <span className="text-primary-dark">Usuário já cadastrado</span>}
          <Form.SubmitButton>Solicitar Acesso</Form.SubmitButton>
        </Form.Root>
      </main>
    </div>
  )
}
