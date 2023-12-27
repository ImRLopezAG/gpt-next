'use client'
import { AddIcon } from '@components/icons'
import { useRouter } from 'next/navigation'
import { useChatStore } from '@app/context'

function AddChat (): JSX.Element {
  const router = useRouter()
  const { addChat } = useChatStore()
  const createChat = (): void => {
    const id = crypto.randomUUID()
    addChat({
      id,
      messages: [],
      name: 'New chat',
      loading: false
    })
    router.push(`/chat/${crypto.randomUUID()}`)
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
