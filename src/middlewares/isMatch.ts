/*
 *  pathname -> matcher:
 *
 *  /disciplinas -> /disciplinas
 *  /disciplinas?disciplina=matematica&assunto=funcoes -> /disciplinas?disciplina&assunto
 *  /disciplinas/:id -> /disciplinas:id (doesnt work, It hasnt been necessary yet)
 */

export function isMatch(pathname: string, matchers: string[]): boolean {
  const decodedPath = decodeURIComponent(pathname)

  for (const matcher of matchers) {
    const [pathWithoutSearchParams] = decodedPath.split('?')
    const [matcherWithoutSearchParams] = matcher.split('?')

    const [, ...pathnameParts] = pathWithoutSearchParams.split('/')
    const [, ...matcherParts] = matcherWithoutSearchParams.split('/')

    if (!pathnameParts || !matcherParts || !areArraysEqual(pathnameParts, matcherParts)) continue

    const pathSearchParams = decodedPath.split('?').map((part) => part.split('&'))[1]
    const pathParams = pathSearchParams?.map((part) => part.split('=')[0])

    const matcherParams = matcher.split('?')[1]?.split('&')

    if (!matcherParams) return true

    if (!pathParams || !areArraysEqual(pathParams, matcherParams)) continue

    return true
  }

  return false
}

function areArraysEqual<T>(arr1: T[], arr2: T[]) {
  let areEqual = true

  if (arr1?.length != arr2?.length) return false

  arr1.forEach((item, i) => (areEqual = item != arr2[i] ? false : areEqual))

  return areEqual
}
