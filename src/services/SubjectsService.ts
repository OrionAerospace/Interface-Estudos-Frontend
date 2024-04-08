import { api } from '@/config/variables'
import { Subject } from '@/types/Subject/Subject'

export function useSubjects() {
  const MINUTE = 60

  async function getAllSubjects(idUser: number, idDiscipline: number) {
    const res = await fetch(`${api}/subject/${idUser}/${idDiscipline}`, {
      cache: 'force-cache',
      next: {
        revalidate: 30 * MINUTE,
      },
    })

    return (await res.json()) as Subject[]
  }

  return {
    getAllSubjects,
  }
}
