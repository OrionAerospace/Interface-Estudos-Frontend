import { useCookies } from '@/services/CookiesService'

type RemoveCookieButtonProps = {
  token: string
  onRemove?: () => void
}

const RemoveCookieButton: React.FC<RemoveCookieButtonProps> = ({ token, onRemove }) => {
  const { removeCookie } = useCookies()

  const logout = () => {
    removeCookie(token)
    if (onRemove) {
      onRemove()
    }
  }

  return <button onClick={logout}>Sair</button>
}

export default RemoveCookieButton
