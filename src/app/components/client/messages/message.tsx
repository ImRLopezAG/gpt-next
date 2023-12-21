import ReactMarkdown from 'react-markdown'
import { CopyClipBoard } from '.'

interface MessageProps {
  message: string
  isBot: boolean
}

export function Message ({ message, isBot }: MessageProps): JSX.Element {
  return (
    <>
      {isBot
        ? (
        <ReactMarkdown
          components={{
            code ({ className, children, ...props }) {
              const language = /language-(\w+)/.exec(className ?? '')
              return language !== null
                ? (
                <CopyClipBoard
                  props={props}
                  lang={language[1]}
                  children={children}
                />
                  )
                : (
                <code style={{
                  backgroundColor: '#1a1a1a75',
                  padding: '0.1rem 0.5rem',
                  borderRadius: '0.5rem'
                }} className={className} {...props}>
                  {children}
                </code>
                  )
            }
          }}
        >
          {message}
        </ReactMarkdown>
          )
        : (
            message
          )}
    </>
  )
}

export default Message
