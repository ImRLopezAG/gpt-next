import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Messages {
  id: string
  message: string
  isBot: boolean
}

export interface Chat {
  id: string
  messages: Messages[]
  name: string
  loading: boolean
}
export type Edit = Pick<Chat, 'id' | 'name'>
interface AddMessage {
  id: string
  message: Messages
}

interface State {
  chats: Chat[]
  loading: boolean
}

interface Action {
  addChat: (chat: Chat) => void
  clearChats: () => void
  getChatMessages: (id: string) => Messages[] | undefined
  addMessage: ({ id, message }: AddMessage) => void
  setLoading: (loading: boolean) => void
  getLastBotMessage: (id: string) => Messages | undefined
  clearMessages: (id: string) => void
  deleteChat: (id: string) => void
  editChat: ({ id, name }: Edit) => void
  getFirstMessage: (id: string) => Messages | undefined
}

export const useChatStore = create(
  persist<State & Action>(
    (set, get) => ({
      chats: [],
      loading: false,
      addChat: (chat: Chat) => {
        set((state) => ({
          chats: [...state.chats.filter((c) => c.messages.length > 0), chat]
        }))
      },
      clearChats: () => {
        set((state) => ({
          chats: []
        }))
      },
      getChatMessages: (id: string) => {
        const { chats } = get()
        return chats.find((chat) => chat.id === id)?.messages
      },
      addMessage: ({ id, message }) => {
        set((state) => ({
          chats: state.chats.map((chat) => {
            if (chat.id === id) {
              return {
                ...chat,
                messages: [...chat.messages, message]
              }
            }
            return chat
          })
        }))
      },
      setLoading: (loading: boolean) => {
        set((state) => ({
          chats: state.chats.map((chat) => {
            return {
              ...chat,
              loading
            }
          })
        }))
      },
      getLastBotMessage: (id: string) => {
        const { chats } = get()
        const messages = chats.find((chat) => chat.id === id)?.messages
        return messages?.filter((message) => message.isBot).pop()
      },
      clearMessages: (id: string) => {
        set((state) => ({
          chats: state.chats.map((chat) => {
            if (chat.id === id) {
              return {
                ...chat,
                messages: []
              }
            }
            return chat
          })
        }))
      },
      deleteChat: (id: string) => {
        set((state) => ({
          chats: [...state.chats].filter((chat) => chat.id !== id)
        }))
      },
      editChat: ({ id, name }) => {
        set((state) => ({
          chats: [
            ...state.chats.map((chat) => {
              if (chat.id === id) {
                return {
                  ...chat,
                  name
                }
              }
              return chat
            })
          ]
        }))
      },
      getFirstMessage: (id: string) => {
        const { chats } = get()
        const messages = chats.find((chat) => chat.id === id)?.messages
        return messages?.shift()
      }
    }),
    {
      name: 'chat'
    }
  )
)
