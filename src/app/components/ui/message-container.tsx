import { twc } from 'react-twc'

type MessageContainerProps = React.ComponentProps<'section'> & { $isBot?: boolean }

const MessageContainer = twc.div<MessageContainerProps>(({ $isBot }) => [
  'flex flex-row items-baseline px-4 mb-3',
  $isBot ? 'justify-start' : 'justify-end'
])

export default MessageContainer
