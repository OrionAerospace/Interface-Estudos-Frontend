import { api } from '@/config/variables'
import { Discipline } from '@/types/Discipline/Discipline'

export function useDiscipline() {
  const MINUTE = 60

  async function getAllDIsicplines() {
    const res = await fetch(`${api}/discipline`, {
      cache: 'force-cache',
      next: {
        revalidate: 30 * MINUTE,
      },
    })

    return (await res.json()) as Discipline[]
  }

  async function getDisciplineByName(name: string) {
    const allDisciplines = await getAllDIsicplines()
    const foundDiscipline = allDisciplines.find((discipline) => discipline.name === name)
    return foundDiscipline?.idDiscipline
  }

  async function getAllDIsicplinesWithContents() {
    const res = await fetch(`${api}/discipline?withContents=true`, {
      next: {
        revalidate: 30 * MINUTE,
      },
    })

    return (await res.json()) as Discipline[]
  }
  async function addUser(idUser: number, idDiscipline: number) {
    idUser + 'cadastrado' + idDiscipline
  }
  return {
    addUser,
    getAllDIsicplines,
    getAllDIsicplinesWithContents,
    getDisciplineByName,
  }
}
