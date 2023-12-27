'use client'
import { AddIcon } from '@components/icons'
import { useRouter } from 'next/navigation'
import { useChatStore } from '@app/context'

function AddChat (): JSX.Element {
  const router = useRouter()
  const { addChat, setCurrentChat } = useChatStore()
  const createChat = (): void => {
    const id = crypto.randomUUID()
    setCurrentChat(id)
    addChat({
      id,
      messages: [],
      name: 'New chat',
      loading: false
    })
    router.push(`/chat/${id}`)
  }
  return (
    <button
      onClick={createChat}
      className='flex items-center justify-center text-blue-500 rounded-full'
    >
      <AddIcon />
    </button>
  )
}

export default AddChat
