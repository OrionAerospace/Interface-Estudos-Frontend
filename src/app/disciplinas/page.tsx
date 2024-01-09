"use client";
import React from 'react';
import { useState } from 'react';
import Conteudos from '@/components/Conteudos';
import styles from './styles.module.scss'; // Estilos com Sass/SCSS


const Disciplina = () => {
  const disciplinas = [
    { 
      nome: 'Cálculo',
      assuntos: ['Matemática Básica', 'Pré-Cálculo', 'Limites', /* ...outras subdisciplinas*/],
      icone: '/assets/icons/calculo.png'
    },
    { 
      nome: 'Física',
      assuntos: ['Grandezas Físicas', 'Cinemática Retilínea', 'Cinemática Angular', /* ...outras subdisciplinas*/],
      icone: '/assets/icons/fisica.png'
    },
    { 
      nome: 'Álgebra Linear',
      assuntos: ['Vetores', 'Retas e Planos', 'Matrizes e Sistemas Lineares', /* ...outras subdisciplinas*/],
      icone: '/assets/icons/matrizes.png'
    },
    // Adicione mais disciplinas conforme necessário
  ];
  
  const selectedDisciplina = disciplinas[0]; // Defina a disciplina selecionada dinamicamente

  const [selectedAssunto, setSelectedAssunto] = useState();
  return (
    <div className={styles['main-container']}>
      <div className={styles['content']}>
        <header className={styles['top-bar']}>
          <div className={styles['logo']}>
            <img src="/assets/images/orion.png" alt="Logo" />
          </div>
          <input type="text" placeholder="Pesquisar" className={styles['search-bar']} />
          <div className={styles['top-right-bar']}>
            <div className={styles['notifications-icon']}>Notificações</div>
            <div className={styles['profile-link']}>Perfil</div>
            <div className={styles['options-menu']}>Opções</div>
          </div>
        </header>
        <div className={styles['main-content']}>
          <div className={styles['sidebar']}>
            {disciplinas.map((disciplina, index) => (
              <DisciplinaItem key={index} disciplina={disciplina} />
              
            ))}
          </div>
          
          {/* Renderiza o componente Conteudo se um assunto estiver selecionado */}
          <DisciplinaBox selectedDisciplina={selectedDisciplina} setSelectAssunto={setSelectedAssunto}>
            {selectedAssunto && <Conteudos assunto={selectedAssunto} />}
          </DisciplinaBox>
        </div>
      </div>
    </div>
  );
};

const DisciplinaItem = ({ disciplina }: { disciplina: any }) => (
  <div className={styles['disciplina-item']} style={{ display: 'flex', alignItems: 'center' }}>
    <img src={disciplina.icone} alt="Icon" className={styles['disciplina-icon']} />
    <span className={styles['disciplina-text']}>{disciplina.nome}</span>
  </div>
);

const DisciplinaBox = ({ selectedDisciplina, setSelectAssunto, children }: { selectedDisciplina: any, setSelectAssunto: any, children: React.ReactNode }) => (
  <div className={styles['disciplina-box']}>
    <div className={styles['disciplina-header']}>
      <img src={selectedDisciplina.icone} alt="Icon" className={styles['disciplina-icon']} />
      <h1>{selectedDisciplina.nome}</h1>
      <button onClick={() => resetarUseState(setSelectAssunto)}>Voltar</button>
    </div>
    
    <div className={styles['assuntos']}>
      <h1>Todos os assuntos de {selectedDisciplina.nome}</h1>
      {selectedDisciplina.assuntos.map((assunto: string, index: number) => (
        <div key={index} className={styles['assunto-card']}>
          {/* Atualiza o estado selectedAssunto quando o botão é clicado */}
          <button onClick={() => setSelectAssunto(assunto)}>{assunto}</button>
        </div>
      ))}
    </div>
    {children}
  </div>
);

const resetarUseState = (setSelectAssunto: any) => {
  setSelectAssunto(null);
}

export default Disciplina;