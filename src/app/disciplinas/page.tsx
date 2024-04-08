import { useDiscipline } from '@/services/DisciplineService'
import { DisciplineScreen } from './screen'

export default async function Discipline() {
  const { getAllDIsicplines } = useDiscipline()
  const disciplines = await getAllDIsicplines()

  return <DisciplineScreen disciplines={disciplines} />
}
