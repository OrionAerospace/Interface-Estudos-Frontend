import { http } from '@/config/axios'
import { UserLogin } from '@/interfaces/User/UserLogin'
import { UserRegister } from '@/interfaces/User/UserRegister'

export class UserService {
  static async register(user: UserRegister) {
    try {
      const res = await http({
        method: 'POST',
        data: user,
      })

      if (res.status !== 201) {
        throw new Error('Erro ao cadastrar o usuário')
      }

      return res.data
    } catch (err) {
      return err
    }
  }

  static async login(user: UserLogin) {
    try {
      const res = await http({
        method: 'POST',
        data: user,
      })

      if (res.status !== 201) {
        throw new Error('Erro ao cadastrar o usuário')
      }

      return res.data
    } catch (err) {
      return err
    }
  }
}
