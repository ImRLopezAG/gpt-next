import { generateResponse } from '@app/actions/ai.action'
import { useMessageStore } from '@app/context'

interface HotButtonProps {
  prompt: string
}

function HotButton ({ prompt }: HotButtonProps): JSX.Element {
  const { addMessage, setLoading } = useMessageStore()
  async function handleClick (): Promise<void> {
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
    setLoading(false)
  }

  return (
    <button onClick={async () => {
      await handleClick()
    }} className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-gray-900'>
      {prompt}
    </button>
  )
}

export default HotButton
