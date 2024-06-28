'use client'
import { SideBar } from '@/screens/Disciplinas/SideBar'
import Link from 'next/link'
import { useCookies } from '@/services/CookiesService'

export default function DisciplinesLayout({ children }: { children: React.ReactNode }) {
  const { removeCookie } = useCookies()

  const handleRemoveCookie = () => {
    removeCookie('token')
    removeCookie('user')
    removeCookie('refreshToken')
    window.location.href = '/login'
  }

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
                <img src="/assets/icons/notification.png" alt="Notificações" className="w-8" />
                <span>Notificações</span>
              </li>
              {/* <li>Perfil</li> */}
              <Link href="/perfil">Perfil</Link>
              <li>Opções</li>
              <button onClick={handleRemoveCookie}>Sair</button>
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
