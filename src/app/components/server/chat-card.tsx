import { DeleteChat } from '@components/client/chat'
import { Avatar } from '@components/server/ui'

import Link from 'next/link'
interface ChatProps {
  name: string
  href: string
}

const getFirstCapitalize = (str: string): string =>
  str
    .charAt(0)
    .toUpperCase()
    .replace(/(?:__|[*#])+/g, '')
    .replace(/#+\s/g, '')
    .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, '$2')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .trim()

function Chat ({ name, href }: ChatProps): JSX.Element {
  return (
    <Link
      href={href}
      className='flex flex-row items-center justify-between hover:bg-zinc-500 rounded-xl cursor-pointer'
    >
      <div className='flex items-center justify-center overflow-hidden'>
        <Avatar>{getFirstCapitalize(name)}</Avatar>
        <span className='ml-2 font-bold text-lg truncate'>
          {name}
        </span>
      </div>
      <DeleteChat id={href.replace('/chat/', '')} />
    </Link>
  )
}

export default Chat
