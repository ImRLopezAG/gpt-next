import { useRef, useEffect, useState } from 'react'
import { useMessageStore, type Messages } from '@app/context'

interface MessageReturn {
  messages: Messages[] | undefined
  loading: boolean
  messagesEndRef: React.MutableRefObject<HTMLDivElement | null>
}

export function useMessage (): MessageReturn {
  const { messages, loading } = useMessageStore()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messagesStorage, setMessages] = useState<Messages[]>()

  useEffect(() => {
    if (typeof window !== 'undefined' && messages !== undefined) {
      setMessages(messages)
    }
  }, [messages])

  return {
    messages: messagesStorage,
    loading,
    messagesEndRef
  }
}
