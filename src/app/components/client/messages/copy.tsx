import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useMessage } from '@app/hooks'

interface MessageProps {
  lang: string
  children: React.ReactNode
  props: any
}

function CopyableCodeBlock ({ children, lang, props }: MessageProps): JSX.Element {
  const { copyToClipboard } = useMessage()
  return (
    <section className='my-2'>
      <div className='flex flex-row bg-gray-600 text-white text-xs font-bold rounded-t px-2 py-1 justify-between items-center'>
        {lang}
        <button onClick={async () => {
          await copyToClipboard(String(children).replace(/\n$/, ''))
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
        </button>
      </div>
    <SyntaxHighlighter
      style={{ ...vscDarkPlus }}
      language={lang}
      customStyle={{
        borderRadius: '0 0 0.5rem 0.5rem',
        padding: '1rem',
        overflow: 'auto',
        paddingRight: '0.1rem',
        paddingTop: '0.2rem',
        marginTop: 0
      }}
      children={String(children).replace(/\n$/, '')}
      {...props}
    />
  </section>
  )
}

export default CopyableCodeBlock
