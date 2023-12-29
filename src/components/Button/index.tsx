import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles['button']} {...props}>
      {children}
    </button>
  )
}
