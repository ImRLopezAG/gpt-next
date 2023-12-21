'use client'
import { useMessage } from '@app/hooks'
import { OpenAIIcon } from '@components/icons'
import { useLayoutEffect } from 'react'
import { HotQuestions } from '@components/client/chat'
import { Message } from '.'

function Messages (): JSX.Element {
  const { loading, messages, messagesEndRef } = useMessage()
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  return (
    <div className='flex flex-col w-full max-w-7xl px-4 overflow-y-auto h-[800px] overflow-auto rounded-sm'>
      {typeof window !== 'undefined' &&
      messages !== undefined &&
      messages.length > 0
        ? (
            messages.map(({ id, message, isBot }) => (
          <div
            key={id}
            className={`flex flex-row items-baseline px-4 mb-3  ${
              isBot ? 'justify-start' : 'justify-end'
            }`}
          >
            <span
              className={`inline-block text-center size-7 mr-2 rounded-full flex-shrink-0 ${
                isBot ? 'bg-green-500' : 'bg-blue-500'
              }`}
            >
              {isBot ? '🤖' : '👤'}
            </span>
            <div
              className={`px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-2xl pl-6 pr-16 py-2 text-pretty ${
                isBot ? 'bg-zinc-800' : 'bg-zinc-700'
              } border border-zinc-700 text-white text-lg resize-none overflow-hidden text-pretty${
                isBot ? 'rounded-br-none' : 'rounded-bl-none'
              }`}
            >
              <Message message={message} isBot={isBot} />
            </div>
            <div ref={messagesEndRef} />
          </div>
            ))
          )
        : (
        <div className='flex flex-col items-center justify-center h-full gap-3'>
          <OpenAIIcon />
          <h1 className='text-3xl font-semibold mb-12'>
            How can I help you today?
          </h1>
          <HotQuestions />
        </div>
          )}
      {loading && (
        <div className='flex flex-row items-center justify-center'>
          <div className='px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-full animate-pulse'>
            Loading...
            <span className='ml-2' role='img' aria-label='Loading'>
              🔄
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Messages
