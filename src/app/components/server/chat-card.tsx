import { Avatar } from '@components/server/ui'
import { DeleteChat } from '@components/client/chat'

import Link from 'next/link'
interface ChatProps {
  name: string
  href: string
}

const getFirstCapitalize = (str: string): string => str.charAt(0).toUpperCase()

function Chat ({ name, href }: ChatProps): JSX.Element {
  return (
    <div className='flex flex-row gap-x-2 justify-between'>
      <Link
        href={href}
        className='flex flex-row items-center hover:bg-zinc-500 rounded-xl p-1 px-2 cursor-pointer truncate'
      >
        <Avatar>{getFirstCapitalize(name)}</Avatar>
        <span className='ml-2 font-bold text-lg'>{name}</span>
      </Link>
      <DeleteChat id={href.replace('/chat/', '')} />
    </div>
  )
}

export default Chat
