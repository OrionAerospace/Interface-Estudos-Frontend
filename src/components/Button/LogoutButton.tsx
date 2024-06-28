import React from 'react'
import { useCookies } from '@/services/CookiesService'

type RemoveCookieButtonProps = {
  token: string
  onRemove?: () => void
}

const RemoveCookieButton: React.FC<RemoveCookieButtonProps> = ({ token, onRemove }) => {
  const { removeCookie } = useCookies()

  const handleRemoveCookie = () => {
    removeCookie(token)
    if (onRemove) {
      onRemove()
    }
  }

  return <button onClick={handleRemoveCookie}>Remover Cookie</button>
}

export default RemoveCookieButton
