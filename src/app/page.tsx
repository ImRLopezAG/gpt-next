import { ChatForm } from '@components/client/chat'
import { Messages } from '@components/client/messages'

export default function Home (): JSX.Element {
  return (
    <section className='flex flex-col justify-end h-screen  items-center  max-w-7xl mx-auto p-4 gap-3'>
      <Messages />
      <ChatForm />
    </section>
  )
}
