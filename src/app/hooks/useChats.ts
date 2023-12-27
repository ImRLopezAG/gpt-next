import { useEffect, useState } from 'react'
import { useChatStore } from '@app/context'
import type { Edit, Chat } from '@app/context'
import { getNameFromResponse } from '@app/actions'
import { useParams, useRouter } from 'next/navigation'

interface ChatReturn {
  chats: Chat[] | undefined
  changeName: ({ id, name }: Edit) => Promise<void>
  current: string
  createChat: () => void
  deleteChat: (id: string) => void
}

function useChats (): ChatReturn {
  const { id } = useParams()

  const router = useRouter()
  const { chats, getFirstMessage, editChat, setCurrentChat, addChat, deleteChat } =
    useChatStore()
  const [chatsStorage, setChats] = useState<Chat[]>()

  function markdownFormatToTextPlain (message: string): string {
    return message
      .replace(/(?:__|[*#])+/g, '')
      .replace(/#+\s/g, '')
      .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, '$2')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '')
      .replace(/`([^`]+)`/g, '$1')
      .trim()
  }

  async function changeName ({ id, name }: Edit): Promise<void> {
    const bot = getFirstMessage(id)
    if (bot !== undefined && name === 'New chat') {
      const { message } = bot
      const name = await getNameFromResponse({
        prompt: markdownFormatToTextPlain(message)
      })
      editChat({
        id,
        name
      })
    }
  }

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

  useEffect(() => {
    if (typeof window !== 'undefined' && chats !== undefined) {
      setChats(chats)
    }
  }, [chats])

  return {
    chats: chatsStorage,
    changeName,
    current: typeof id !== 'string' ? '' : id,
    createChat,
    deleteChat
  }
}

export { useChats }
