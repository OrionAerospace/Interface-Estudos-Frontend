import { MiddlewareFactory } from '@/types/Middleware/types'
import { disciplines } from '@/utils/disciplines'
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { isMatch } from './isMatch'

const matchers = ['/disciplinas/assunto?disciplina&assunto']

export const withSubject: MiddlewareFactory = (next: NextMiddleware) => {
  return (request: NextRequest, _next: NextFetchEvent) => {
    if (isMatch(request.nextUrl.pathname + request.nextUrl.search, matchers)) {
      const searchParams = new URLSearchParams(request.nextUrl.search)
      const subject = searchParams.get('assunto')

      if (!subject) {
        NextResponse.redirect(
          new URL(`/disciplinas&disciplina=${searchParams.get('disciplina')}`, request.nextUrl)
        )
      }

      const isSubject = disciplines.some((d) =>
        d.subjects.some((s) => s.name === subject!.replace('%20', ' '))
      )

      if (!isSubject) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
      }
    }

    return next(request, _next)
  }
}
