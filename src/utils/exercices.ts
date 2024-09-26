import { Exercice } from '@/types/Exercices/Exercices'

export const exercices: Exercice[] = [
  {
    name: 'Exercicio 1',
    date: new Date('2024-01-01'),
    details: 'Descricao do exercicio 1',
    resposta: [
      { id: 1, texto: 'Resposta A', correta: true },
      { id: 2, texto: 'Resposta B', correta: false },
      { id: 3, texto: 'Resposta C', correta: false },
    ],
    dica: 'Dica para o exercicio 1',
  },
  {
    name: 'Exercicio 2',
    date: new Date('2024-01-05'),
    details: 'Descricao do exercicio 2',
    resposta: [
      { id: 1, texto: 'Resposta A', correta: false },
      { id: 2, texto: 'Resposta B', correta: true },
      { id: 3, texto: 'Resposta C', correta: false },
    ],
    dica: 'Dica para o exercicio 2',
  },
  {
    name: 'Exercicio 3',
    date: new Date('2024-01-10'),
    details: 'Descricao do exercicio 3',
    resposta: [
      { id: 1, texto: 'Resposta A', correta: true },
      { id: 2, texto: 'Resposta B', correta: false },
      { id: 3, texto: 'Resposta C', correta: false },
    ],
    dica: 'Dica para o exercicio 3',
  },
  {
    name: 'Exercicio 4',
    date: new Date('2024-01-08'),
    details: 'Descricao do exercicio 4',
    resposta: [
      { id: 1, texto: 'Resposta A', correta: false },
      { id: 2, texto: 'Resposta B', correta: true },
      { id: 3, texto: 'Resposta C', correta: false },
    ],
    dica: 'Dica para o exercicio 4',
  },
]
