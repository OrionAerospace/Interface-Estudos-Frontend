import styles from './styles.module.scss'
import Link from 'next/link'
import { useDiscipline } from '@/services/DisciplineService'

export default async function Home() {
  const { getAllDIsicplines } = useDiscipline()
  const disciplines = await getAllDIsicplines()

  return (
    <div className={styles['page-container']}>
      <header className={styles['header']}>
        <h1>Interface de Estudos</h1>
        <h2>Aprenda cálculo, física e muito mais!</h2>
        <Link href="/cadastro">Cadastrar</Link>
        <Link href="/login">Entrar</Link>
      </header>

      <div className={styles['subjects-container']}>
        <div className={styles['cards-container']}>
          {disciplines.map((discipline) => (
            <Link
              href={`/disciplinas?disciplina=${discipline.name}`}
              key={discipline.idDiscipline}
              className={styles['card']}
            >
              <img src={`/assets/icons/${discipline.code}.png`} className="w-16" alt="" />
              {discipline.name}
            </Link>
          ))}
        </div>
      </div>
      <footer className={styles['footer']}>
        <p>Feito em 2023 | UTFPR PG</p>
      </footer>
    </div>
  )
}
