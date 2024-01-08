import { useRef } from 'react'
import { useChatStore, type MessageType } from '@app/context'
import { toast } from 'react-hot-toast'
import { useParams } from 'next/navigation'
import { useChats } from '.'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

type MyParams = Params & { id: string }

interface MessageReturn {
  messages: MessageType[] | undefined
  loading: boolean
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>
  markdownFormatToTextPlain: (message: string) => string
  copyToClipboard: (message: string) => Promise<void>
}

export function useMessage (): MessageReturn {
  const { id }: MyParams = useParams()
  const { chats, createChat } = useChats()

  if (id === undefined && chats !== undefined && typeof id === 'string') {
    const chat = chats.find((chat) => chat.id === id)
    if (chat === undefined) {
      createChat()
    }
  }

  const { getChatMessages, loading } = useChatStore()
  const messages = getChatMessages(id)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const copyToClipboard = async (message: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(message)
      toast.success('Copied to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err)
      toast.error('Failed to copy')
    }
  }

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

  return {
    messages,
    loading,
    messagesEndRef,
    markdownFormatToTextPlain,
    copyToClipboard
  }
}
