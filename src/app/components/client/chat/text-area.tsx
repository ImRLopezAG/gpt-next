import { useChat } from '@app/hooks'

function TextArea (): JSX.Element {
  const { textareaRef, prompt, setPrompt } = useChat()
  return (
    <textarea
      ref={textareaRef}
      value={prompt}
      name='prompt'
      id='prompt'
      onChange={({ target }) => {
        setPrompt(target.value)
      }}
      rows={1}
      className='flex w-full border border-zinc-800 rounded-xl focus:outline-none focus:border-white pl-4 pt-2 h-10 bg-zinc-800 resize-none overflow-auto max-h-52 min-h-12 scrollbar-hide'
    />
  )
}

export default TextArea
