import { Center } from '@chat/center'
import { MessageBot } from '@chat/message-bot'
import { AIIcon, AvatarIcon } from '@components/icons'
import { useChat } from '@hooks/use-chat'
import { cx } from 'react-twc'
import { MessageBox } from './message'
import { Suggestions } from './suggestions'

export const Messages = () => {
  const { messages, streaming } = useChat()
  return (
    <>
      {messages.length === 0 && <Suggestions />}
      {messages.length > 0 && (
        <div className='flex  h-full flex-col bg-dark-secondary '>
          <div className='overflow-y-auto'>
            <div className='opacity-100 flex flex-col gap-3 mt-16'>
              {messages.map(({ id, text, author }) => (
                <Center
                  key={id}
                  className='mb-3'
                  wrapperClassName={cx(
                    'flex',
                    author === 'AI' && 'justify-end'
                  )}
                >
                  <div className={cx('flex', author === 'AI' && 'justify-end')}>
                    <MessageBox $isBot={author === 'AI'}>
                      {author === 'AI' && <MessageBot message={text} />}
                      {author !== 'AI' && text}
                      {author !== 'AI' && <AvatarIcon />}
                      {author === 'AI' && <AIIcon />}
                    </MessageBox>
                  </div>
                </Center>
              ))}
              {streaming && (
                <Center wrapperClassName='flex justify-end'>
                  <MessageBox $isBot>
                    <MessageBot message={streaming} />
                    <AIIcon />
                  </MessageBox>
                </Center>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
