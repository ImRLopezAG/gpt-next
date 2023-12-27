import { useRef, useEffect, useState } from 'react'
import { useChatStore, type Messages } from '@app/context'
import { toast } from 'react-hot-toast'
import { usePathname } from 'next/navigation'

interface MessageReturn {
  messages: Messages[] | undefined
  loading: boolean
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>
  markdownFormatToTextPlain: (message: string) => string
  copyToClipboard: (message: string) => Promise<void>
}

export function useMessage (): MessageReturn {
  const pathname = usePathname()
  const id = pathname.replace('/chat/', '')
  const { getChatMessages, loading } = useChatStore()
  const messages = getChatMessages(id)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messagesStorage, setMessages] = useState<Messages[]>()

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

  useEffect(() => {
    if (typeof window !== 'undefined' && messages !== undefined) {
      setMessages(messages)
    }
  }, [messages])

  return {
    messages: messagesStorage,
    loading,
    messagesEndRef,
    markdownFormatToTextPlain,
    copyToClipboard
  }
}
