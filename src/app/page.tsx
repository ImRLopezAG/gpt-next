'use client'
import { useChat } from '@hooks/use-chat'
import { ChatSection } from '@ui/section'
import { SideBar } from '@ui/side-bar'

export default function Home() {
  const { isOpen, handleSideBar, isMobile } = useChat()
  return (
    <div className='relative z-0 flex h-full w-full overflow-hidden'>
      <SideBar />
      <div
        onClick={() => isOpen && isMobile && handleSideBar()}
        className='flex-1 h-full w-full overflow-hidden'
      >
        <ChatSection />
      </div>
    </div>
  )
}
