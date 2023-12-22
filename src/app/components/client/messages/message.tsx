import ReactMarkdown from 'react-markdown'
import { CopyClipBoard } from '.'
import { useMessage } from '@app/hooks'

interface MessageProps {
  message: string
  isBot: boolean
  props?: any
}

type RenderCodeBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function Message ({ message, isBot }: MessageProps): JSX.Element {
  const { markdownFormatToTextPlain, copyToClipboard } = useMessage()
  const renderCodeBlock = ({ className, children, ...props }: RenderCodeBlockProps): JSX.Element => {
    const language = /language-(\w+)/.exec(className ?? 'text-plain')
    if (language !== null) {
      return (
        <CopyClipBoard
          props={props}
          lang={language[1] ?? 'javascript'}
          children={children}
        />
      )
    } else {
      return (
        <code style={{
          backgroundColor: '#1a1a1a75',
          padding: '0.1rem 0.5rem',
          borderRadius: '0.5rem'
        }} className={className} {...props}>
          {children}
        </code>
      )
    }
  }
  return (
    <>
      {isBot
        ? (
            <div className='flex flex-col gap-2'>
              <button
                onClick={async () => {
                  await copyToClipboard(markdownFormatToTextPlain(message))
                }}
                className='flex flex-row items-center gap-2 text-md font-medium text-center'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2' />
                  <path d='M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z' />
                </svg>
                Copy
              </button>
              <ReactMarkdown
                components={{
                  code: renderCodeBlock
                }}
            >
              {message}
            </ReactMarkdown>
          </div>
          )
        : (
            message
          )}
    </>
  )
}

export default Message
