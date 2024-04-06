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
  expiration: Date
  accessToken: string
  refreshToken: string
}

export function useUser() {
  const { setCookie } = useCookies()

  async function register(user: UserRegister) {
    try {
      const res = await http({
        method: 'POST',
        data: user,
      })

      if (res.status !== 201) {
        throw new Error('Erro ao cadastrar o usuário')
      }

      login(user)

      return { error: false, message: 'Usuário cadastrado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao cadastrar o usuário' }
    }
  }

  async function login(user: UserLogin) {
    try {
      const res = await http<LoginResponse>('/login', {
        method: 'POST',
        data: user,
      })

      if (res.status !== 200) throw new Error('Erro ao cadastrar o usuário')

      setCookies(res.data)

      return { error: false, message: 'Usuário logado com sucesso' }
    } catch (err) {
      return { error: true, message: 'Erro ao realizar o login' }
    }
  }

  function setCookies(data: LoginResponse) {
    setCookie('token', data.accessToken, {
      expires: data.expiration,
    })
    setCookie('refreshToken', data.refreshToken, {
      expires: data.expiration,
    })
    setCookie('user', {
      userId: data.userId.toString(),
      username: data.username,
      fullName: data.fullName,
    })
  }

  return {
    register,
    login,
  }
}
