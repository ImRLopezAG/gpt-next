import { AddChat, Chats } from '@components/client/chat'
import { ChatHeader } from '@components/server'

function Header (): JSX.Element {
  return (
    <aside className='hidden md:flex flex-col py-6 pl-6 pr-2 w-64 md:flex-shrink-0'>
      <ChatHeader />
      <div className='flex flex-col gap-3 mt-8'>
        <div className='flex flex-row items-center justify-between text-xs'>
          <h2 className='font-bold text-xl'>Active Conversations</h2>
          <AddChat />
        </div>
        <div className='flex flex-col space-y-1 scrollbar-hide overflow-y-auto max-h-[28em]'>
          <Chats />
        </div>
      </div>
    </aside>
  )
}

export default Header
