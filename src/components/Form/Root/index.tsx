import styles from './styles.module.scss'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type FormProps<T> = {
  children: React.ReactNode
  form: UseFormReturn<T & FieldValues>
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function Root<T>({ children, form, onSubmit }: FormProps<T>) {
  return (
    <div className={styles['container']}>
      <form className="w-full flex flex-col gap-5 2xl:gap-6 justify-between" onSubmit={onSubmit}>
        <FormProvider {...form}>{children}</FormProvider>
      </form>
    </div>
  )
}
