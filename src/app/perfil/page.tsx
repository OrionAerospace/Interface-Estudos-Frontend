import styles from './styles.module.scss'

export default function Profile() {
  return (
    <div className={styles['container']}>
      <div className={styles['profile-container']}>
        <div className={styles['profile-info']}>
          <div>
            <h1>[Nome do usuário]</h1>
            <p>Seu Curso</p>
            <p>Cidade</p>
            <p>Escola/Universidade</p>
            <p>Curso</p>
          </div>
          <img src="/assets/images/orion.png" alt="Foto de perfil" />
        </div>

        <div className={styles['stats']}>
          <div className={styles['item']}>
            <p>Pré-cálculo</p>
            <h2>76%</h2>
          </div>
          <div className={styles['item']}>
            <p>Limites</p>
            <h2>33%</h2>
          </div>
          <div className={styles['item']}>
            <p>Derivadas</p>
            <h2>71%</h2>
          </div>
          <div className={styles['item']}>
            <p>Integrais</p>
            <h2>68%</h2>
          </div>
        </div>
         
        <h2>Conquistas:</h2>
        
         <div className={styles['badges-icon']}>
          <img src="/assets/badges/atom.png" alt="" />
          <img src="/assets/badges/career.png" alt="" />
          <img src="/assets/badges/medal.png" alt="" />
          <img src="/assets/badges/mountain.png" alt="" />
          <img src="/assets/badges/plex.png" alt="" />
          <img src="/assets/badges/rank.png" alt="" />
       </div>
         
       
      </div>
    </div>
  )
}
