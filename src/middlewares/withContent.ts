import { useDiscipline } from '@/services/DisciplineService'
import { MiddlewareFactory } from '@/types/Middleware/types'
import { isMatch } from '@/utils/functions/isMatch'
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server'
import { useContent } from '@/services/ContentService'

const matchers = ['/disciplinas/assunto?disciplina&assunto']

export const withContent: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    if (isMatch(request.nextUrl.pathname + request.nextUrl.search, matchers)) {
      const searchParams = new URLSearchParams(request.nextUrl.search)
      const { getAllDIsicplines } = useDiscipline()
      const disciplines = await getAllDIsicplines()

      const disciplineName = request.nextUrl.searchParams.get('disciplina')
      const selectedDisciplina = disciplines.find((obj) => obj.name === disciplineName)!

      const { getAllContentsByDiscipline } = useContent()
      const contents = await getAllContentsByDiscipline(selectedDisciplina.idDiscipline)

      const subject = searchParams.get('assunto')
      if (!subject) {
        NextResponse.redirect(
          new URL(`/disciplinas&disciplina=${searchParams.get('disciplina')}`, request.nextUrl)
        )
      }

      const isContent = contents.some((s) => s.name === subject!.replace('%20', ' '))

      if (!isContent) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
      }
    }

    return next(request, _next)
  }
}
