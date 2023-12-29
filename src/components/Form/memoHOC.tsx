'use client' // TODO

import { memo } from 'react'

export function memoHOC<T extends object>(Component: React.ComponentType<T>) {
  function Wrapper(props: T) {
    return <Component {...props} />
  }

  return memo(Wrapper, (prevProps, nextProps) => {
    return prevProps === nextProps
  })
}
