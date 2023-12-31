import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const title = tv({
  base: 'text-[1.6rem] 2xl:text-3xl uppercase text-primary font-bold tracking text-center',
})

type ITitleProps = ComponentProps<'title'> & {
  children: React.ReactNode
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({ children, Tag, className }: ITitleProps) {
  return <Tag className={title({ className })}>{children}</Tag>
}
