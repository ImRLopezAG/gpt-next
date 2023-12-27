import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface MessageType {
  id: string
  message: string
  isBot: boolean
}

export interface Chat {
  id: string
  messages: MessageType[]
  name: string
  loading: boolean
}

export type Edit = Pick<Chat, 'id' | 'name'>
interface AddMessage {
  id: string
  message: MessageType
}

interface State {
  chats: Chat[]
  loading: boolean
  current: string
}

interface Action {
  addChat: (chat: Chat) => void
  clearChats: () => void
  getChatMessages: (id: string) => MessageType[] | undefined
  addMessage: ({ id, message }: AddMessage) => void
  setLoading: (loading: boolean) => void
  getLastBotMessage: (id: string) => MessageType | undefined
  clearMessages: (id: string) => void
  deleteChat: (id: string) => void
  editChat: ({ id, name }: Edit) => void
  getFirstMessage: (id: string) => MessageType | undefined
  setCurrentChat: (id: string) => void
}

export const useChatStore = create(
  persist<State & Action>(
    (set, get) => ({
      chats: [],
      loading: false,
      current:
        typeof window !== 'undefined'
          ? window.location.pathname.replace('/chat/', '')
          : '',
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
        const ch = chats.find((chat) => chat.id === id)
        if (ch !== undefined) {
          return ch.messages
        }
        return []
      },
      addMessage: ({ id, message }) => {
        const { chats } = get()
        const chat = chats.find((chat) => chat.id === id)
        if (chat !== undefined) {
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
        }
      },
      setLoading: (loading: boolean) => {
        set((state) => ({
          loading
        }))
      },
      getLastBotMessage: (id: string) => {
        const { chats } = get()
        const messages = chats.find((chat) => chat.id === id)?.messages
        const message = messages?.filter((message) => message.isBot).pop()
        return message
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
        const message = messages?.filter((message) => message.isBot).shift()
        return message
      },
      setCurrentChat: (id: string) => {
        set(() => ({
          current: id
        }))
      }
    }),
    {
      name: 'chat'
    }
  )
)
