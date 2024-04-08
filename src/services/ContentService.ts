import { api } from '@/config/variables'
import { Content } from '@/types/Content/Content'

export function useContent() {
  async function getAllContentsByDiscipline(idDiscipline: number) {
    const res = await fetch(`${api}/content/${idDiscipline}`)

    return (await res.json()) as Content[]
  }

  return {
    getAllContentsByDiscipline,
  }
}
