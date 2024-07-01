import { http } from '@/config/axios'
import { UserLogin } from '@/types/User/UserLogin'
import { UserRegister } from '@/types/User/UserRegister'
import { useCookies } from './CookiesService'
import { TeacherRegister } from '@/types/Teacher/TeacherRegister'

type LoginResponse = {
  userId: number
  fullName: string
  username: string
  authenticated: true
  created: Date
  expiration: number
  accessToken: string
  refreshToken: string
}

export function useUser() {
  const { setCookie } = useCookies()
  const { removeCookie } = useCookies()

  async function register<T extends UserRegister | TeacherRegister>(
    user: T,
    isChecked: boolean,
    permission: string = 'user'
  ) {
    try {
      const res = await http(`/auth/signup/${permission}`, {
        method: 'POST',
        data: user,
      })

      if (res.status !== 201) {
        throw new Error('Erro ao cadastrar o usuário')
      }

      await login(user, isChecked)

      return { error: false, message: 'Usuário cadastrado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao cadastrar o usuário' }
    }
  }

  async function login(user: UserLogin, isChecked: boolean) {
    try {
      const res = await http<LoginResponse>('/auth/signin', {
        method: 'POST',
        data: user,
      })

      if (res.status !== 200) throw new Error('Erro ao realizar o login')

      setCookies(res.data, isChecked)

      return { error: false, message: 'Usuário logado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao realizar o login' }
    }
  }

  function setCookies(data: LoginResponse, isChecked: boolean) {
    const maxAge = isChecked ? data.expiration : undefined

    setCookie('token', data.accessToken, {
      maxAge: maxAge,
    })
    setCookie('refreshToken', data.refreshToken, {
      maxAge: maxAge,
    })
    setCookie(
      'user',
      {
        userId: data.userId.toString(),
        username: data.username,
        fullName: data.fullName,
      },
      { maxAge: maxAge }
    )
  }

  function logout() {
    removeCookie('token')
    removeCookie('user')
    removeCookie('refreshToken')
  }

  return {
    register,
    login,
    logout,
  }
}
