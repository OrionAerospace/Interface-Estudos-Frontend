// LogoutButton.tsx
import { logout } from '@/services/auth1'

const LogoutButton: React.FC = () => {
  const handleLogout = async () => {
    try {
      await logout()
      window.location.href = '/login' // Redirecionar para a página de login
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  return <button onClick={handleLogout}>Sair</button>
}
export default LogoutButton
