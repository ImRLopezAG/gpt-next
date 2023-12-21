'use client'
import { useChat } from '@app/hooks'

function ChatForm (): JSX.Element {
  const { handleMessage, pending, prompt, setPrompt, textareaRef } = useChat()

  return (
    <form
      className='flex flex-row items-center w-full px-4 my-3 shrink-0 ml-16'
      action={handleMessage}
    >
      <textarea
        ref={textareaRef}
        id='prompt'
        name='prompt'
        value={prompt}
        onChange={({ target }) => {
          setPrompt(target.value)
        }}
        rows={1}
        placeholder='What do you want to know?'
        className='flex h-12 px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-2xl w-full pl-6 pr-16 py-2 bg-zinc-800 border border-zinc-700 resize-none text-white text-lg overflow-auto max-h-52 min-h-12 focus:[&>button]:bg-white focus:[&>button]:text-black focus:[&>button]:active:bg-zinc-800 focus:[&>button]:active:text-white transition-all duration-150'
      ></textarea>
      <button
        type='submit'
        disabled={pending}
        className='bg-zinc-700 rounded-full p-1 hover:bg-white hover:text-black active:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring relative right-10 active:scale-95 transform transition-all duration-150'
        style={{
          cursor: pending ? 'not-allowed' : 'pointer'
        }}
      >
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path
            d='M7 11L12 6L17 11M12 18V7'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </button>
    </form>
  )
}

export default ChatForm
