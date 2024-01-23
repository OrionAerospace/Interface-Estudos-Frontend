

import { Discipline } from '@/types/Discipline/Discipline'


export const disciplines = [
  {
    name: 'Cálculo',
    subjects: [
      {
        name: 'Pré-Cálculo',
        classes: [
          {
            topic: 'Conjuntos Numéricos',
            lessons: [
              { name: 'Aula 1', conclusion: false},
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Funções',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Funções Trigonométricas',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Funções Polinomiais',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Limites',
        classes: [
          {
            topic: 'Continuidade',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Definição de Limites',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Limites Laterais',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Limites Infinitos',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Derivadas',
        classes: [
          {
            topic: 'Definição de Derivadas',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Problemas de Taxa de Variação',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Esboço de Gráficos',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Problemas de Otimização',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Integrais',
        classes: [
          {
            topic: 'Definição de Integrais',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Teorema Fundamental do Cálculo',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Regras de Integração',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Problemas de Áreas',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
    ],
    icon: '/assets/icons/calculo.png',
  },
  {
    name: 'Física',
    subjects: [
      {
        name: 'Cinemática',
        classes: [
          {
            topic: 'Grandezas Físicas',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Cinemática do Ponto Material',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Movimento Bi e Tridimensional',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Movimento Circular',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Leis de Newton',
        classes: [
          {
            topic: 'Primeira, Segunda e Terceira Lei de Newton',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Aplicações das Leis de Newton',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Trabalho e potência',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Lei de conservação da energia',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Conservação do Momento Linear',
        classes: [
          {
            topic: 'Momento linear',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Impulso e momento linear',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Colisões elásticas em uma dimensão,',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
          {
            topic: 'Colisões inelásticas em uma dimensão',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Rotações',
        classes: [
          {
            topic: 'Variáveis da rotação',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Segunda Lei de Newton para a rotação',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Momento angular de um sistema de partículas',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Conservação do momento angular',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
    ],
    icon: '/assets/icons/fisica.png',
  },
  {
    name: 'Álgebra Linear',
    subjects: [
      {
        name: 'Vetores e Espaços Vetoriais',
        classes: [
          {
            topic: 'Definição de vetores',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Espaços Vetoriais',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Dependência Linear',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Base e Dimensão',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Transformações Lineares, Autovalores e Autovetores',
        classes: [
          {
            topic: 'Transformações Lineares',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Autovalores',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Autovetores',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Diagonalização de Operadores',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Equações Diferenciais Ordinárias',
        classes: [
          {
            topic: 'Definição e solução de Equações Diferenciais Lineares de Primeira Ordem',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Solução pelo Método direto; Solução pelo método do fator integrante',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Equações Diferenciais Lineares de ordem n',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Sistemas de Equações Lineares',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
      {
        name: 'Números Complexos',
        classes: [
          {
            topic: 'Definição de Números Complexos',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Propriedades Operatórias dos Números Complexos',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: false },
              { name: 'Aula 4', conclusion: true },
            ],
          },
          {
            topic: 'Conjugados Complexos, Valores absolutos e Forma Polar de um Número Complexo',
            lessons: [
              { name: 'Aula 1', conclusion: true },
              { name: 'Aula 2', conclusion: true },
              { name: 'Aula 3', conclusion: true },
            ],
          },
          {
            topic: 'Fórmula de Euler',
            lessons: [
              { name: 'Aula 1', conclusion: false },
              { name: 'Aula 2', conclusion: true },
            ],
          },
        ],
      },
    ],
    icon: '/assets/icons/matrizes.png',
  },

  



] satisfies Discipline[]

