import { SendIcon } from '@components/icons'
import { useChat } from '@app/hooks'

function Submit (): JSX.Element {
  const { loading, handleMessage } = useChat()
  return (
    <button
      disabled={loading}
      onClick={handleMessage}
      className='absolute flex items-center justify-center h-full w-12 right-0 top-0 text-white hover:text-black '
    >
      <SendIcon className='bg-black rounded-full hover:bg-white' />
      <span className='sr-only'>Submit</span>
    </button>
  )
}
export default Submit
