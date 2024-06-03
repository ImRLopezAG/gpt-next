'use client'
import { generateStreaming } from '@actions/ai.action'
import { useMediaQuery } from '@hooks/use-media-query'
import { createContext, useState, useTransition } from 'react'
import { toast } from 'react-hot-toast'

interface Message {
  id: string
  text: string
  author: 'You' | 'AI'
}

interface ChatContextProps {
  isPending: boolean
  messages: Message[]
  addMessage: (message: string) => void
  removeMessage: (id: string) => void
  clearMessages: () => void
  streaming: string
  isOpen: boolean
  handleSideBar: () => void
  isMobile: boolean
  copyToClipboard: (message: string) => Promise<void>
}

export const ChatContext = createContext<ChatContextProps | null>(null)

interface ChatProviderProps {
  children: React.ReactNode
}
export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [isPending, startTransition] = useTransition()
  const [messages, setMessages] = useState<Message[]>([])
  const [streaming, setStreaming] = useState<string>('')
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [isOpen, setIsOpen] = useState(!isMobile)
  const handleSideBar = () => {
    setIsOpen(!isOpen)
  }
  const handleStreaming = (message: string) => {
    setStreaming((prev) => prev + message)
  }
  const addMessage = (message: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: message,
        author: 'You'
      }
    ])
    startTransition(async () => {
      await generateStreaming({ prompt: message })
        .then(async (res) => {
          const reader = res.getReader()
          let text = ''
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            console.log(value)
            text += value
            handleStreaming(value)
          }
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              text,
              author: 'AI'
            }
          ])
        })
        .catch((err) => {
          console.error(err)
          setMessages((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              text: 'An error occurred',
              author: 'AI'
            }
          ])
        })
        .finally(() => {
          setStreaming('')
        })
    })
  }

  const removeMessage = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id))
  }

  const clearMessages = () => {
    setMessages([])
  }
  const copyToClipboard = async (message: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(message)
      toast.success('Copied to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err)
      toast.error('Failed to copy')
    }
  }

  const value = {
    isPending,
    messages,
    addMessage,
    removeMessage,
    clearMessages,
    streaming,
    isOpen,
    handleSideBar,
    isMobile,
    copyToClipboard
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}
