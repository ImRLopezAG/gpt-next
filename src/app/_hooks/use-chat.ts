import { ChatContext } from '@context/chat'
import { use } from 'react'

export const useChat = () => {
  const context = use(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
