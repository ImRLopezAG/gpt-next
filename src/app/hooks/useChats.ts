import { useEffect, useState } from 'react'
import { useChatStore } from '@app/context'
import type { Edit, Chat } from '@app/context'
import { getNameFromResponse } from '@app/actions'
import { useMessage } from '.'

interface ChatReturn {
  chats: Chat[] | undefined
  changeName: ({ id, name }: Edit) => Promise<void>
}

function useChats (): ChatReturn {
  const { chats, getFirstMessage, editChat } = useChatStore()
  const [chatsStorage, setChats] = useState<Chat[]>()
  const { markdownFormatToTextPlain } = useMessage()

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

  useEffect(() => {
    if (typeof window !== 'undefined' && chats !== undefined) {
      setChats(chats)
    }
  }, [chats])

  return {
    chats: chatsStorage,
    changeName
  }
}

export { useChats }
