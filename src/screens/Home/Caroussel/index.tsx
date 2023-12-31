import { CSSProperties } from 'react'
import styles from './styles.module.scss'

const subjects = [
  { icon: 'A', title: 'Física', color: '#FFD700' },
  { icon: 'B', title: 'Álgebra', color: '#A52A2A' },
  { icon: 'C', title: 'Probabilidade', color: '#B8860B' },
  { icon: 'D', title: 'Química', color: '#C0C0C0' },
  { icon: 'E', title: 'Cálculo', color: '#808080' },
  { icon: 'F', title: 'Geometria', color: '#008000' },
  { icon: 'G', title: 'Estatística', color: '#008080' },
  // Adicione mais ícones e títulos conforme necessário
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
