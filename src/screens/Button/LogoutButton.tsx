'use client'
import { useUser } from '@/services/UserService'
import { useRouter } from 'next/navigation'

export function RemoveCookieButton() {
  const { logout } = useUser()
  const router = useRouter()

  function handleLogout() {
    logout()
    router.push('/login')
  }

  return <button onClick={handleLogout}>Sair</button>
}
