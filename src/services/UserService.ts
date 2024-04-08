import { http } from '@/config/axios'
import { UserLogin } from '@/types/User/UserLogin'
import { UserRegister } from '@/types/User/UserRegister'
import { useCookies } from './CookiesService'

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

  async function register(user: UserRegister, isChecked: boolean) {
    try {
      const res = await http('/auth/signup/USER', {
        method: 'POST',
        data: user,
      })

      if (res.status !== 201) {
        throw new Error('Erro ao cadastrar o usuário')
      }

      login(user, isChecked)

      return { error: false, message: 'Usuário cadastrado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao cadastrar o usuário' }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function login(user: UserLogin, isChecked: boolean) {
    try {
      const res = await http<LoginResponse>('/auth/signin', {
        method: 'POST',
        data: user,
      })

      if (res.status !== 200) throw new Error('Erro ao realizar o login')

      setCookies(res.data)

      return { error: false, message: 'Usuário logado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao realizar o login' }
    }
  }

  function setCookies(data: LoginResponse) {
    setCookie('token', data.accessToken, {
      maxAge: data.expiration,
    })
    setCookie('refreshToken', data.refreshToken, {
      maxAge: data.expiration,
    })
    setCookie(
      'user',
      {
        userId: data.userId.toString(),
        username: data.username,
        fullName: data.fullName,
      },
      { maxAge: data.expiration }
    )
  }

  return {
    register,
    login,
  }
}
