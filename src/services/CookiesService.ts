import Cookies from 'cookies-next'

type CookiesOptions = {
  expires?: Date
  httpOnly?: boolean
}
export function useCookies() {
  function setCookie(
    name: string,
    value: string | Record<string, string>,
    options: Partial<CookiesOptions> = {}
  ) {
    const strValue = JSON.stringify(value)

    Cookies.setCookie(name, strValue, options)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getCookie<T = any>(name: string) {
    const cookie = Cookies.getCookie(name)
    if (!cookie) return null

    return { value: JSON.parse(cookie) as T }
  }

  function removeCookie(name: string) {
    Cookies.deleteCookie(name)
  }

  return {
    setCookie,
    getCookie,
    removeCookie,
  }
}
