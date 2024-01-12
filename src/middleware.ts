import { stackMiddlewares } from './middlewares/stackMiddlewares'
import { withDiscipline } from './middlewares/withDiscipline'
import { withSubject } from './middlewares/withSubject'

const middlewares = [withDiscipline, withSubject]

export default stackMiddlewares(middlewares)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
