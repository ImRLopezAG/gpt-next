import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={inter.className + ' bg-zinc-900 text-white'}>
        {children}
      </body>
    </html>
  )
}
