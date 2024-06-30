import styles from './styles.module.scss'

export default function cadastroDisciplina() {
  return (
    <div className={styles['container']}>
      <aside className={styles['left-section']}>
        <img src="/assets/images/orion.png" alt="Logo da OrionAerospace" className="w-64" />
      </aside>
      <main className={styles['right-section']}>
        ENTRAR NA DISCIPLINA
        <div className="flex gap-4">
          <button>Procurar disciplina</button>
        </div>
      </main>
    </div>
  )
}
