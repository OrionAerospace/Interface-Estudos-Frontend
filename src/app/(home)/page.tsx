import styles from './styles.module.scss'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Carousel } from '@/screens/Home/Caroussel'

export default function Home() {
  return (
    <div className={styles['page-container']}>
      <header className={styles['header']}>
        <h1>Interface de Estudos de Cálculo</h1>
        <h2>Aprenda cálculo, física e muito mais!</h2>
        <Button>Cadastrar</Button>
      </header>
      <div className={styles['subjects-container']}>
        <Carousel />
        <div className={styles['cards-container']}>
          <div className={styles['card']}>Cálculo</div>
          <div className={styles['card']}>Física</div>
          <div className={styles['card']}>Química</div>
          <div className={styles['card']}>Álgebra Linear</div>
          <div className={styles['card']}>Geometria Analítica</div>
        </div>
        <Link href="/login">Ver mais assuntos de Cálculo</Link>
      </div>
      <footer className={styles['footer']}>
        <p>Feito em 2023 | UTFPR PG</p>
      </footer>
    </div>
  )
}
