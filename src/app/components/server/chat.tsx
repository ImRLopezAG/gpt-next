import { Form } from '@components/server'
import { Messages } from '@components/client/messages'

function Chat (): JSX.Element {
  return (
    <section className='flex flex-col flex-auto h-screen p-6'>
      <div className='flex flex-col justify-end flex-shrink-0 rounded-2xl bg-zinc-900 h-full p-4 overflow-y-hidden'>
        <Messages />
        <Form />
      </div>
    </section>
  )
}

export default Chat
