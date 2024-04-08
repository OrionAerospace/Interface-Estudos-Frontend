import Link from 'next/link'
import styles from './styles.module.scss'
import { useDiscipline } from '@/services/DisciplineService'

export async function SideBar() {
  const { getAllDIsicplines } = useDiscipline()
  const disciplines = await getAllDIsicplines()

  return (
    <div className={styles['sidebar']}>
      {disciplines.map((discipline, index) => (
        <Link
          href={`/disciplinas?disciplina=${discipline.name.replace(' ', '%20')}`}
          key={index}
          className={styles['discipline']}
        >
          <img src={`/assets/icons/${discipline.code}.png`} alt="Icon" />
          <span className={styles['disciplina-text']}>{discipline.name}</span>
        </Link>
      ))}
    </div>
  )
}
