import { Messages } from '@chat/messages'
import {
  AvatarIcon,
  ChatIcon,
  SideBarIcon,
  SmallSideBarIcon
} from '@components/icons'
import { useChat } from '@hooks/use-chat'
import { ChatForm } from '@ui/form'

export const ChatSection: React.FC = () => {
  const { isOpen, handleSideBar, isMobile } = useChat()
  return (
    <main className='relative h-full w-full flex-1 overflow-y-auto bg-dark-secondary'>
      <div
        role='presentation'
        className='flex h-full flex-col focus-visible:outline-0'
      >
        <div className='flex-1 overflow-hidden'>
          <div className='relative h-full'>
            <div className='absolute left-0 right-0'>
              <div className='sticky top-0 p-3 mb-1.5 flex items-center justify-between  h-14 font-semibold  bg-dark-secondary -z-19'>
                <div className='flex items-center gap-2 overflow-hidden'>
                  {!isOpen && (
                    <div className='flex justify-between  items-center z-40'>
                      <button
                        className='h-10 rounded-lg p-2 focus-visible:outline-0 hover:hover:bg-zinc-700 focus-visible:bg-fg-secondary'
                        onClick={handleSideBar}
                      >
                        <span className='sr-only'>Open Sidebar</span>
                        {!isMobile && <SideBarIcon />}
                        {isMobile && <SmallSideBarIcon />}
                      </button>
                      {!isMobile && (
                        <button className='h-10 rounded-lg p-2 focus-visible:outline-0 hover:hover:bg-zinc-700 focus-visible:bg-fg-secondary'>
                          <span className='sr-only'>Open Chat</span>
                          <ChatIcon />
                        </button>
                      )}
                    </div>
                  )}
                  <div
                    aria-haspopup='menu'
                    aria-expanded='false'
                    data-state='closed'
                    className='group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-semibold hover:bg-zinc-700 radix-state-open:bg-zinc-700   overflow-hidden whitespace-nowrap'
                  >
                    <span className='text-fg-tertiary'>My GPT</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='icon-md text-token-text-tertiary'
                    >
                      <path
                        fill='currentColor'
                        fillRule='evenodd'
                        d='M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className='flex gap-2 pr-1'>
                  <button
                    className='flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-700 focus-visible:bg-zinc-700 focus-visible:outline-0'
                    type='button'
                    id='radix-:r6:'
                    aria-haspopup='menu'
                    aria-expanded='false'
                    data-state='closed'
                  >
                    <div className='flex items-center justify-center overflow-hidden rounded-full'>
                      <div className='relative flex'>
                        <AvatarIcon />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <Messages />
          </div>
        </div>
        <ChatForm />
      </div>
    </main>
  )
}
