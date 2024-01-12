import Link from 'next/link'
import styles from './styles.module.scss'
import { disciplines } from '@/utils/disciplines'

export function SideBar() {
  return (
    <div className={styles['sidebar']}>
      {disciplines.map((discipline, index) => (
        <Link
          href={`/disciplinas?disciplina=${discipline.name.replace(' ', '%20')}`}
          key={index}
          className={styles['discipline']}
        >
          <img src={discipline.icon} alt="Icon" />
          <span className={styles['disciplina-text']}>{discipline.name}</span>
        </Link>
      ))}
    </div>
  )
}
