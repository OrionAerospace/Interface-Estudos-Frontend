import { MiddlewareFactory } from '@/types/Middleware/types'
import { isMatch } from '@/utils/functions/isMatch'
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { getCookies } from 'cookies-next'

const matchers = ['/disciplinas', '/perfil', '/disciplinas/assunto', '/disciplinas/aulas']

export const authentication: MiddlewareFactory = (next: NextMiddleware) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    if (isMatch(req.nextUrl.pathname + req.nextUrl.search, matchers)) {
      const { token, refreshToken, user } = getCookies({ req, res: NextResponse.next() })

      if (!token || !refreshToken || !user)
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    return next(req, _next)
  }
}
