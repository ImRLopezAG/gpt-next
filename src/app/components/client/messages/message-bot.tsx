'use client'
import ReactMarkdown from 'react-markdown'
import { CopyClipBoard } from '.'
import { useMessage } from '@app/hooks'
import { CopyIcon } from '@components/icons'

interface MessageProps {
  message: string
}

type RenderCodeBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement
>

export function MessageBot ({ message }: MessageProps): JSX.Element {
  const { markdownFormatToTextPlain, copyToClipboard } = useMessage()
  const renderCodeBlock = ({
    className,
    children,
    ...props
  }: RenderCodeBlockProps): JSX.Element => {
    const language = /language-(\w+)/.exec(className ?? 'text-plain')
    if (language !== null) {
      return (
        <CopyClipBoard
          props={props}
          lang={language[1] ?? 'text-plain'}
          children={children}
        />
      )
    } else {
      return (
        <code
          style={{
            backgroundColor: '#1a1a1a75',
            padding: '0.1rem 0.5rem',
            borderRadius: '0.5rem'
          }}
          className={className}
          {...props}
        >
          {children}
        </code>
      )
    }
  }
  return (
    <div className='flex flex-col gap-2'>
      <button
        onClick={async () => {
          await copyToClipboard(markdownFormatToTextPlain(message))
        }}
        className='flex flex-row items-center gap-2 text-md font-medium text-center'
      >
        <CopyIcon />
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
}

export default MessageBot
