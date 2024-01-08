import { generateResponse } from '@app/actions/ai.action'
import { useChatStore } from '@app/context'

interface HotButtonProps {
  prompt: string
}

function HotButton ({ prompt }: HotButtonProps): JSX.Element {
  const { addMessage, setLoading, current } = useChatStore()
  async function handleClick (): Promise<void> {
    setLoading(true)
    addMessage({
      id: current,
      message: {
        message: prompt,
        isBot: false,
        id: crypto.randomUUID()
      }
    })
    const response = await generateResponse({ prompt })
    addMessage({
      id: current,
      message: {
        message: response,
        isBot: true,
        id: crypto.randomUUID()
      }
    })
    setLoading(false)
  }

  return (
    <button
      onClick={async () => {
        await handleClick()
      }}
      className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow'
    >
      {prompt}
    </button>
  )
}

export default HotButton
