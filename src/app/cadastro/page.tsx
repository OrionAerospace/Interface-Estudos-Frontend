'use client'

import styles from './styles.module.scss'
import { useUser } from '@/services/UserService'
import { z } from 'zod'
import { registerFormDataSchema } from '@/zod/schemas/registerFormDataSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/Form'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type registerFormData = z.infer<typeof registerFormDataSchema>

export default function Register() {
  const router = useRouter()
  const { register } = useUser()

  const registerUserForm = useForm<registerFormData>({
    resolver: zodResolver(registerFormDataSchema),
  })
  const { handleSubmit } = registerUserForm

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

    router.push('/disciplinas?disciplina=Cálculo%20I')
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
          <div className="flex gap-4">
            <Form.Input name="fullName" field="Nome Completo" />
            <Form.Input name="username" field="Usuário" />
          </div>
          <div className="flex gap-4">
            <Form.Input name="email" field="E-mail" />
            <Form.Input name="city" field="Cidade" />
          </div>
          <div className="flex gap-4">
            <Form.Input name="course" field="Curso" />
            <Form.Input name="university" field="Universidade" />
          </div>
          <div className="flex gap-4">
            <Form.Input type="password" name="password" field="Senha" />
            <Form.Input type="password" name="confirmPassword" field="Confirme a sua senha" />
          </div>
          {errorMessage.error && <span className="text-primary-dark">Usuário já cadastrado</span>}
          <Form.CheckBox field="isChecked">Lembrar senha</Form.CheckBox>
          <Form.SubmitButton>Criar conta</Form.SubmitButton>
        </Form.Root>
      </main>
    </div>
  )
}
