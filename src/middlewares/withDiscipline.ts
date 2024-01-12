import { MiddlewareFactory } from '@/types/Middleware/types'
import { disciplines } from '@/utils/disciplines'
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { isMatch } from './isMatch'

const matchers = ['/disciplinas']

export const withDiscipline: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (isMatch(request.nextUrl.pathname + request.nextUrl.search, matchers)) {
      const searchParams = request.nextUrl.searchParams

      const discipline = searchParams.get('disciplina')
      const isDicipline =
        !discipline || !disciplines.some((d) => d.name === decodeURIComponent(discipline))

      if (isDicipline) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
      }
    }

    return next(request, _next)
  }
}
