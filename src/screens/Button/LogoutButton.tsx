'use client'
import { useUser } from '@/services/UserService'
import { useRouter } from 'next/navigation'

const RemoveCookieButton = () => {
  const { logout } = useUser()
  const router = useRouter()

  const handleLogout = () => {
    logout()
  }

  return (
    <button
      type="button"
      onClick={() => {
        handleLogout()
        router.push('/login')
      }}
    >
      Sair
    </button>
  )
}

export default RemoveCookieButton
