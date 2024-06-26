import type { Metadata } from 'next'
import { Poppins, Caveat } from 'next/font/google'
import '@/styles/globals.scss'
import { Providers } from '@/providers'
import { Suspense } from 'react'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: 'Interface Estudos',
  description: 'Interface de Estudos desenvolvida pela OrionAerospace',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${caveat.variable}`}>
        <Providers>
          <Suspense
            fallback={
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-black">
                Carregando...
              </p>
            }
          >
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
