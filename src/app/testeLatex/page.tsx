'use client'

import styles from './styles.module.scss'
import { useUser } from '@/services/UserService'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/Form' // Presumo que o Form seja necessário, mas não está usado
import Link from 'next/link'
import { loginFormDataSchema } from '@/zod/schemas/loginFormDataSchema'
import { useRouter } from 'next/navigation'
import ConversorLatex from '@/components/InputLatex'
import TimedButton from '@/components/TimedButton' // Certifique-se de que o caminho esteja correto
import React, { useState } from 'react'

type LoginFormData = z.infer<typeof loginFormDataSchema>

export default function Login() {
  const router = useRouter()
  const { login } = useUser()

  const registerUserForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema),
  })
  const { handleSubmit, setValue } = registerUserForm

  const modifyData = (data: string) => `\\ ${data}`

  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: '',
  })

  async function submit(data: LoginFormData) {
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
    <div className={styles.container}>
      <aside className={styles['left-section']}>
        <img src="/assets/images/orion.png" alt="Logo da OrionAerospace" className="w-64" />
        <ConversorLatex modifyData={modifyData} />
        <TimedButton timeout={5000} onClick={() => alert('Botão clicado!')} />
        <Link href="/cadastro">Cadastrar</Link>
      </aside>
    </div>
  )
}
