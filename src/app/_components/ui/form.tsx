import { Center } from '@chat/center'
import { useChat } from '@hooks/use-chat'
import { useState } from 'react'
export const ChatForm = () => {
  const { isPending, addMessage } = useChat()
  const [message, setMessage] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addMessage(message)
    setMessage('')
  }
  return (
    <Center className='pb-8'>
      <form
        className='w-full bg-fg-primary rounded-full'
        onSubmit={handleSubmit}
      >
        <div className='relative flex h-full max-w-full flex-1 flex-col'>
          <div className='flex w-full items-center'>
            <div className='flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors dark:bg-zinc-700 align-baseline'>
              <div className='flex items-center gap-1.5 md:gap-3.5 justify-center'>
                <div className='flex flex-col item'>
                  <button
                    className='flex items-center justify-center  h-8 w-8 dark:text-white  *: focus-visible:outline-black dark:focus-visible:outline-white mb-1 ml-[3px]'
                    aria-disabled='false'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className='flex min-w-0 flex-1 flex-col '>
                  <textarea
                    id='prompt-textarea'
                    dir='auto'
                    placeholder='Message ChatGPT'
                    className='m-0 resize-none border-0 bg-transparent px-0 max-h-[25dvh] overflow-y-hidden h-6 focus:outline-none '
                    value={message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  disabled={isPending || !message}
                  className='mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-fg-secondary disabled:text-fg-primary disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    fill='none'
                    viewBox='0 0 32 32'
                    className='icon-2xl'
                  >
                    <path
                      fill='currentColor'
                      fillRule='evenodd'
                      d='M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Center>
  )
}
