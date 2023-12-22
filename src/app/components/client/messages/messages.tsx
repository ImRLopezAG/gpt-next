'use client'
import { useMessage } from '@app/hooks'
import { OpenAIIcon } from '@components/icons'
import { useLayoutEffect } from 'react'
import { HotQuestions } from '@components/client/chat'
import { Box, Container, Picture } from '@components/ui'
import { Message, Toast } from '.'

function Messages (): JSX.Element {
  const { loading, messages, messagesEndRef } = useMessage()
  useLayoutEffect(() => {
    if (typeof window !== 'undefined' && messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  return (
    <div className='flex flex-col w-full max-w-7xl px-4 overflow-y-auto h-[800px] overflow-auto rounded-sm'>
      <Toast />
      {typeof window !== 'undefined' &&
      messages !== undefined &&
      messages.length > 0
        ? (
            messages.map(({ id, message, isBot }) => (
              <Container key={id} $isBot={isBot}>
                <Picture $isBot={isBot}>
                  {isBot ? '🤖' : '👤'}
                </Picture>
                <Box $isBot={isBot}>
                  <Message message={message} isBot={isBot} />
                </Box>
                <div ref={messagesEndRef} />
              </Container>
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
        <Box $isBot>
          <Message message='Thinking...' isBot />
        </Box>
      )}
    </div>
  )
}

export default Messages
