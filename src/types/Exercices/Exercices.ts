export type Exercice = {
  name: string
  date: Date
  details: string
  resposta: {
    id: number
    texto: string
    correta: boolean
  }[]
  dica: string
}
