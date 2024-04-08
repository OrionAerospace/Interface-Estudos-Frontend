import { getCookie as GetCookie, setCookie as SetCookie, deleteCookie } from 'cookies-next'

type CookiesOptions = {
  expires?: Date
  httpOnly?: boolean
  maxAge?: number
}
export function useCookies() {
  function setCookie(
    name: string,
    value: string | Record<string, string>,
    options: Partial<CookiesOptions> = {}
  ) {
    const strValue = JSON.stringify(value)
    SetCookie(name, strValue, options)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getCookie<T = any>(name: string) {
    const cookie = GetCookie(name)
    if (!cookie) return null

    return { value: JSON.parse(cookie) as T }
  }

  function removeCookie(name: string) {
    deleteCookie(name)
  }

  return {
    setCookie,
    getCookie,
    removeCookie,
  }
}
