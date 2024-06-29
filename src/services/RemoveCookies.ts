'use client'
import { useCookies } from '@/services/CookiesService'

export function handleRemoveCookie() {
  const { removeCookie } = useCookies()

  removeCookie('token')
  removeCookie('user')
  removeCookie('refreshToken')
  window.location.href = '/login'
}
