import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Controle de Mailing', // Já ajustei o título para você
  description: 'Gerenciador de contatos de marcas, agências e freelancers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // A fonte é aplicada aqui, da forma correta, e o idioma ajustado
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* A tag <head> foi removida. O Next.js vai criá-la automaticamente
        com base no seu objeto 'metadata' e outras necessidades.
      */}
      <body>{children}</body>
    </html>
  )
}
