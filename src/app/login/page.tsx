'use client'
import styles from './styles.module.scss'
import { useUser } from '@/services/UserService'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/Form'
import { useState } from 'react'
import Link from 'next/link'
import { loginFormDataSchema } from '@/zod/schemas/loginFormDataSchema'
import { useRouter } from 'next/navigation'

type loginFormData = z.infer<typeof loginFormDataSchema>

export default function Login() {
  const router = useRouter()
  const { login } = useUser()

  const registerUserForm = useForm<loginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  })
  const { handleSubmit, setValue } = registerUserForm

  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: '',
  })

  async function submit(data: loginFormData) {
    const res = await login(data, data.isChecked)
    if (res.error) {
      setErrorMessage({ error: true, message: res.message })
      return
    }

    router.push('/disciplinas?disciplina=Cálculo%20I')

    setValue('password', '')
    setValue('username', '')
  }

  return (
    <div className={styles['container']}>
      <aside className={styles['left-section']}>
        <img src="/assets/images/orion.png" alt="Logo da OrionAerospace" className="w-64" />
        <h2>Ainda não tem uma conta?</h2>
        <p>Crie uma conta para acessar seus resultados!</p>
        <Link href="/cadastro">Cadastrar</Link>
      </aside>
      <main className={styles['right-section']}>
        <Form.Root form={registerUserForm} onSubmit={handleSubmit(submit)}>
          <Form.Title className="mb-4 2xl:mb-12 tracking-widest" Tag="h1">
            Acesse sua conta
          </Form.Title>
          <Form.Input type="text" name="username" field="Usuário" />
          <Form.Input type="password" name="password" field="Senha" />
          {errorMessage.error && <span className="text-primary-dark">{errorMessage.message}</span>}
          <Form.CheckBox field="isChecked">Lembrar senha</Form.CheckBox>
          <Form.SubmitButton>Entrar</Form.SubmitButton>
        </Form.Root>
      </main>
    </div>
  )
}
