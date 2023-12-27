'use client'
import { useMessage } from '@app/hooks'
import { HotQuestions } from '@components/client/chat'
import { OpenAIIcon } from '@components/icons'
import { useLayoutEffect } from 'react'
import { Toast } from '.'
import { Message } from '@components/server'

function Messages (): JSX.Element {
  const { loading, messages, messagesEndRef } = useMessage()
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  return (
    <div className='flex flex-col mb-4 gap-1 px-4 overflow-y-auto scrollbar-hide'>
      <Toast />
      {typeof window !== 'undefined' &&
      messages !== undefined &&
      messages.length > 0
        ? (
            messages.map(({ id, message, isBot }) => (
              <>
                <Message key={id} message={message} isBot={isBot} />
                <span ref={messagesEndRef} className='hidden' />
              </>
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
        <Message isBot message='Please wait while I process your request...' />
      )}
    </div>
  )
}

export default Messages
