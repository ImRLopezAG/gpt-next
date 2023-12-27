import { FileIcon } from '@components/icons'
import { Prompt, SubmitButton } from '@components/client/chat'

function Form (): JSX.Element {
  return (
    <section className='flex flex-row items-center h-16 rounded-xl w-full px-4'>
      <FileIcon className='size-5 text-gray-200 hover:text-gray-500'/>
      <article className='flex-grow ml-4'>
        <div className='relative w-full'>
          <Prompt />
          <SubmitButton />
        </div>
      </article>
    </section>
  )
}

export default Form
