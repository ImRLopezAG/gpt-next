'use client'
import { useChats } from '@app/hooks'
import { ChatCard } from '@components/server'

function Chats (): JSX.Element {
  const { chats, changeName } = useChats()
  return (
    <div className='flex flex-col space-y-3 scrollbar-hide overflow-y-auto max-h-[28em]'>
      {typeof chats !== 'undefined' && (
        <>
          {chats.map(({ id, name }) => {
            changeName({ id, name }).catch(() => {
              console.error('Error')
            })
            return <ChatCard key={id} href={`/chat/${id}`} name={name ?? 'New Chat'} />
          })}
        </>
      )}
    </div>
  )
}

export default Chats
