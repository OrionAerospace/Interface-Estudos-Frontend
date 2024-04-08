import { useDiscipline } from '@/services/DisciplineService'
import { MiddlewareFactory } from '@/types/Middleware/types'
import { isMatch } from '@/utils/functions/isMatch'
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'

const matchers = ['/disciplinas']

export const withDiscipline: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { getAllDIsicplines } = useDiscipline()
    const disciplines = await getAllDIsicplines()

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
