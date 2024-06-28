import { http } from '@/config/axios'
import { useCookies } from '@/services/CookiesService'

const logout = async () => {
  try {
    console.log('Iniciando logout')
    console.log('Configuração do Axios:', http.defaults)
    const res = await http('/auth/logout/USER', {
      method: 'POST',
    })
    console.log('Resposta do logout:', res)
    useCookies().removeCookie('token')
  } catch (error) {
    console.error('Erro ao fazer logout:', error)
    throw error
  }
}

export { logout }
