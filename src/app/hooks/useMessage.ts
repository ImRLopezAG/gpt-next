import { useRef, useEffect, useState } from 'react'
import { useMessageStore, type Messages } from '@app/context'
import { toast } from 'react-hot-toast'

interface MessageReturn {
  messages: Messages[] | undefined
  loading: boolean
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>
  markdownFormatToTextPlain: (message: string) => string
  copyToClipboard: (message: string) => Promise<void>
}

export function useMessage (): MessageReturn {
  const { messages, loading } = useMessageStore()
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
