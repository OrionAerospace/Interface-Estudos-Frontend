import DisciplinesLayout from "../disciplinas/layout";
import styles from './styles.module.scss'
import Video from 'next-video';
import VideoPlayerPlaceholder from "./video/page";

// Adicione a definição do componente VideoPlayerPlaceholder aqui

export default function Aula() {
  return (
    <DisciplinesLayout>
      <div className={styles['discipline-box']}>

        <input
              type="text"
              placeholder="Pesquisar"
              className="w-96 border-2 border-[#ccc] rounded-3xl p-2"
            />
        <button className={styles['move-right']} onClick={undefined}>
          Voltar
        </button>
        <VideoPlayerPlaceholder />
        <button className={styles['finish-lesson-button']}>
          Finalizar Lição
        </button>
        <div style={{ display: 'flex', alignItems: 'flex-start'}}>
      <div style={{ marginRight: '20px', marginTop: '-300px'}}>
        <div style={{ height: '20px', width: '50px', marginBottom:'1px', background: '#007BFF'}}></div>
        <p>Título 1</p>
        <div style={{ height: '20px', width: '30px', marginBottom:'1px', background: '#007BFF'}}></div>
        <p>Título 2</p>
        <div style={{ height: '20px', width: '90px',  marginBottom:'1px',background: '#007BFF'}}></div>
        <p>Título 3</p>
        <div style={{ height: '20px', width: '70px', marginBottom:'1px',background: '#007BFF'}}></div>
        <p>Título 4</p>
        <div style={{ height: '20px', width: '30px', marginBottom:'1px', background: '#007BFF'}}></div>
        <p>Título 5</p>
      </div>
      </div>
      </div>
    </DisciplinesLayout>
  )
}
