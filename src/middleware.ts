import { authentication } from './middlewares/authentication'
import { stackMiddlewares } from './middlewares/stackMiddlewares'
import { withDiscipline } from './middlewares/withDiscipline'
import { withContent } from './middlewares/withContent'

const middlewares = [withDiscipline, withContent, authentication]

export default stackMiddlewares(middlewares)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
