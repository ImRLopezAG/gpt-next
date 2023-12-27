import { MessageBox, Avatar } from '@components/server/ui'
import { Message as MessageBot } from '@components/client/messages'
import { cx } from 'react-twc'

interface MessageProps {
  message: string
  isBot?: boolean
}

function Message ({ message, isBot }: MessageProps): JSX.Element {
  return (
    <div className={cx('flex', !isBot && 'justify-end')}>
      <MessageBox $isBot={!isBot}>
        {isBot ? <MessageBot message={message} /> : message}
        <Avatar $isBot={isBot}>{isBot ? '🤖' : '👤'}</Avatar>
      </MessageBox>
    </div>
  )
}

export default Message
