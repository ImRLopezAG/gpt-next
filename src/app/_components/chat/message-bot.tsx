'use client'
import { useChat } from '@hooks/use-chat'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MessageProps {
  message: string
}

type RenderCodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const MessageBot: React.FC<MessageProps> = ({ message }) => {
  const { copyToClipboard } = useChat()
  const renderCodeBlock = ({
    className,
    children,
    ...props
  }: RenderCodeBlockProps): JSX.Element => {
    const language = /language-(\w+)/.exec(className ?? 'text-plain')
    if (language !== null) {
      return (
        <SyntaxHighlighter
          style={{ ...vscDarkPlus }}
          language={language[1]}
          wrapLines={true}
          wrapLongLines={true}
          customStyle={{
            borderRadius: '0.5rem'
          }}
        >
          {String(children)}
        </SyntaxHighlighter>
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
    <ReactMarkdown
      className='text-balance'
      components={{
        code: renderCodeBlock
      }}
    >
      {message}
    </ReactMarkdown>
  )
}
