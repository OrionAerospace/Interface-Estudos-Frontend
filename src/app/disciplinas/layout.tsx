import { SideBar } from '@/screens/Disciplinas/SideBar'
import Link from 'next/link'
import { LogoutButton } from '@/screens/Logout/LogoutButton'

export default function DisciplinesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light">
      <div className="flex flex-col h-screen">
        <header className="flex justify-between items-center h-20">
          <div className="flex justify-between h-full p-4 gap-4">
            <img src="/assets/images/orion.png" className="h-full" alt="Logo" />
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-96 border-2 border-[#ccc] rounded-3xl p-2"
            />
          </div>
          <nav className="flex items-center justify-center px-10 h-full bg-primary-dark text-white rounded-bl-3xl">
            <ul className="flex items-center auto gap-6 justify-between">
              <li className="flex items-center">
                {/* <img src="/assets/icons/notification.png" alt="Notificações" className="w-8" />
                <span className="text-black">Notificações</span>  não ira aparecer nesse prototipo só na fase final, devido o curto prazo de entrega */}
              </li>
              <li className="text-black">
                <Link href="/perfil">Perfil</Link>
              </li>
              {/* <li className="text-black">Opções</li> não ira aparecer nesse prototipo só na fase final, devido o curto prazo de entrega*/}
              <li>
                <LogoutButton></LogoutButton>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-[1]">
          <div className="relative bg-white text-primary-dark shadow-default shadow-black/10 p-5 rounded-3xl ml-24 mt-2.5 mb-4 w-[92%]">
            {children}
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  )
}
