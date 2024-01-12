import { CSSProperties } from 'react'
import styles from './styles.module.scss'

const subjects = [
  { icon: 'A', title: 'Álgebra', color: '#FFD700' },
  { icon: 'C', title: 'Cálculo', color: '#B8860B' },
  { icon: 'E', title: 'Estatística', color: '#808080' },
  { icon: 'F', title: 'Física', color: '#008000' },
  { icon: 'G', title: 'Geometria', color: '#008080' },
  { icon: 'P', title: 'Probabilidade', color: '#A52A2A' },
  { icon: 'Q', title: 'Química', color: '#C0C0C0' },
]

export function Carousel() {
  const iconStyle = (index: number) => {
    return {
      backgroundColor: subjects[index].color,
      boxShadow: `0 2px 8px 0 ${subjects[index].color}`,
    } satisfies CSSProperties
  }

  return (
    <div className={styles['container']}>
      {subjects.map((subject, index) => (
        <div className={styles['item']} key={index}>
          <div className={styles['icon']} style={iconStyle(index)}>
            <span>{subject.icon}</span>
          </div>
          <p>{subject.title}</p>
        </div>
      ))}
    </div>
  )
}
