'use client'

import styles from './styles.module.scss'
import { UserService } from '@/services/UserService'
import { z } from 'zod'
import { registerFormDataSchema } from '@/zod/schemas/registerFormDataSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/Form'
import { useState } from 'react'
import Link from 'next/link'
import { UserRegister } from '@/interfaces/User/UserRegister'

type registerFormData = z.infer<typeof registerFormDataSchema>

export default function Cadastro() {
  const registerUserForm = useForm<registerFormData>({
    resolver: zodResolver(registerFormDataSchema),
  })
  const { handleSubmit, setValue } = registerUserForm

  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: '',
  })

  async function submit(data: registerFormData) {
    const { isChecked, ...user } = data

    const res = await UserService.register(user)

    setValue('email', '')
    setValue('password', '')
    setValue('name', '')
    setValue('username', '')
  }

  return (
    <div className={styles['container']}>
      <aside className={styles['left-section']}>
        <img src="/assets/images/orion.png" alt="Logo da OrionAerospace" className="w-64" />
        <h2>Já tem uma conta?</h2>
        <p>Entre em sua conta para checar seus resultados!</p>
        <Link href="/login">Entrar</Link>
      </aside>
      <main className={styles['right-section']}>
        <Form.Root form={registerUserForm} onSubmit={handleSubmit(submit)}>
          <Form.Title className="mb-4 2xl:mb-12 tracking-widest" Tag="h1">
            Crie sua conta
          </Form.Title>
          <Form.Input type="text" name="name" field="Nome" />
          <Form.Input type="text" name="username" field="Usuário" />
          <Form.Input type="text" name="email" field="E-mail" />
          <Form.Input type="password" name="password" field="Senha" />
          {errorMessage.error && <span className="text-primaryDark">Usuário já cadastrado</span>}
          <Form.CheckBox field="isChecked">Lembrar senha</Form.CheckBox>
          <Form.SubmitButton>Criar conta</Form.SubmitButton>
        </Form.Root>
      </main>
    </div>
  )
}
