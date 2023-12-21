import { useMessageStore } from '@app/context'
import { generateResponse } from '@app/actions/ai.action'
import { useFormStatus } from 'react-dom'
import { useState, useRef, useEffect } from 'react'

interface ChatReturn {
  handleMessage: () => Promise<void>
  prompt: string
  setPrompt: (prompt: string) => void
  textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>
  pending: boolean
}

export function useChat (): ChatReturn {
  const { addMessage, setLoading } = useMessageStore()
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
  async function handleMessage (): Promise<void> {
    if (
      // eslint-disable-next-line no-constant-condition
      typeof 'window' !== 'undefined' &&
      typeof 'document' !== 'undefined') {
      if (prompt === null || prompt === '') return
      setLoading(true)
      addMessage({
        message: prompt,
        isBot: false,
        id: crypto.randomUUID()
      })
      const response = await generateResponse({ prompt })
      addMessage({
        message: response,
        isBot: true,
        id: crypto.randomUUID()
      })
      setPrompt('')
      setLoading(false)
    }
  }
  return {
    handleMessage,
    prompt,
    setPrompt,
    textareaRef,
    pending
  }
}
