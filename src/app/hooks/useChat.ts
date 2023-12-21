import { useMessageStore } from '@app/context'
import { generateResponse } from '@app/actions/ai.action'
import { useFormStatus } from 'react-dom'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useMessage } from '.'
interface ChatReturn {
  handleMessage: () => Promise<void>
  prompt: string
  setPrompt: (prompt: string) => void
  textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>
  pending: boolean
}

export function useChat (): ChatReturn {
  const { addMessage, setLoading, getLastBotMessage, clearMessages } =
    useMessageStore()
  const { markdownFormatToTextPlain, copyToClipboard } = useMessage()
  const { pending } = useFormStatus()
  const [prompt, setPrompt] = useState<string>('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current !== null) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
      textareaRef.current.style.resize = 'none'
    }
  }, [prompt])

  const handleMessage = useCallback(
    async function (): Promise<void> {
      if (
        // eslint-disable-next-line no-constant-condition
        typeof 'window' !== 'undefined' &&
        typeof 'document' !== 'undefined'
      ) {
        if (prompt === null || prompt === '') return
        setLoading(true)
        addMessage({
          message: prompt,
          isBot: false,
          id: crypto.randomUUID()
        })
        setPrompt('')
        const response = await generateResponse({ prompt })
        addMessage({
          message: response,
          isBot: true,
          id: crypto.randomUUID()
        })
        setLoading(false)
      }
    },
    [prompt]
  )

  const handleKeyDown = useCallback(
    async function (e: KeyboardEvent): Promise<void> {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault()
        await handleMessage()
      }
      if (e.key === 'C' && e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        const lastBotMessage = getLastBotMessage()
        if (lastBotMessage === undefined) return
        await copyToClipboard(markdownFormatToTextPlain(lastBotMessage.message))
      }
      if (e.key === 'R' && e.ctrlKey && e.shiftKey) {
        e.preventDefault()
        if (!confirm('Are you sure you want to clear the chat?')) {
          return
        }
        clearMessages()
      }
    },
    [prompt]
  )

  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('keydown', handleKeyDown)
    return () => {
      typeof window !== 'undefined' &&
        window.removeEventListener('keydown', handleKeyDown)
    }
  }, [prompt])
  return {
    handleMessage,
    prompt,
    setPrompt,
    textareaRef,
    pending
  }
}
