import { Header } from '@components/server'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cx } from 'react-twc'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat GP??',
  description: 'Chat with a GPT-3 powered chatbot.'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout<T extends Props> ({
  children
}: T): JSX.Element {
  return (
    <html lang='en'>
      <body className={cx(' bg-zinc-900 text-white', inter.className)}>
        <main className='flex  flex-row h-screen w-full antialiased text-white bg-zinc-800 overflow-y-hidden'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
