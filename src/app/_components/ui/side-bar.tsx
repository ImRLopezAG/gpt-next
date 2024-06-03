import { ChatIcon, LogoIcon, SideBarIcon } from '@components/icons'
import { useChat } from '@hooks/use-chat'
import { cx } from 'react-twc'
export const SideBar: React.FC = () => {
  const { isOpen, handleSideBar, isMobile } = useChat()
  return (
    <div
      className={cx(
        'flex flex-col h-full overflow-hidden z-20 transition-all duration-200',
        isOpen ? 'w-72' : 'w-0',
        isOpen ? 'bg-dark-primary' : 'bg-dark-secondary',
        isMobile && 'fixed'
      )}
    >
      {isOpen && (
        <div className='flex h-full  flex-col'>
          <div className='flex h-full  flex-col'>
            <div className='relative h-full w-full flex-1 items-start border-white/20'>
              <nav className='flex h-full w-full flex-col px-3 pb-0 mr'>
                <div className='flex justify-between h-14 items-center'>
                  <button
                    onClick={handleSideBar}
                    className='h-10 rounded-lg px-2 focus-visible:outline-0 hover:bg-dark-secondary focus-visible:bg-fg-secondary'
                  >
                    <SideBarIcon />
                  </button>
                  <button className='h-10 rounded-lg px-2 focus-visible:outline-0 hover:bg-dark-secondary focus-visible:bg-fg-secondary'>
                    <ChatIcon />
                  </button>
                </div>
                <div className='flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 '>
                  <div className=' left-0 right-0 top-0 z-20   static pt-0'>
                    <div className='pb-0.5 last:pb-0 '>
                      <a
                        className=' flex h-10 items-center gap-2 rounded-lg  px-2 font-semibold  hover:bg-dark-secondary'
                        href='/'
                      >
                        <div className='h-6 w-6 flex-shrink-0'>
                          <div className='relative flex h-full items-center justify-center rounded-full  '>
                            <LogoIcon className='size-4' />
                          </div>
                        </div>
                        <div className='grow overflow-hidden text-ellipsis whitespace-nowrap text-sm '>
                          ChatGPT
                        </div>
                        <div className='flex gap-3'>
                          <span
                            className='flex items-center'
                            data-state='closed'
                          >
                            <button className='invisible text-token-text-tertiary hover: group-hover:visible  hover:'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                className='icon-md'
                              >
                                <path d='M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4'></path>
                              </svg>
                            </button>
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div
                      aria-haspopup='dialog'
                      aria-expanded='false'
                      aria-controls='radix-:rd:'
                    >
                      <a href='/gpts'>
                        <button className='flex h-10 w-full items-center gap-2 rounded-lg px-2 font-medium  hover:bg-dark-secondary'>
                          <div className='flex items-center justify-center  h-6 w-6'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              fill='none'
                              viewBox='0 0 24 24'
                              className='icon-md'
                            >
                              <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M6.75 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 4.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 6.75a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.75 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.5 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M17.25 15a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M13 17.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0'
                                clipRule='evenodd'
                              ></path>
                            </svg>
                          </div>
                          <span className='text-sm'>Explore GPTs</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2 pb-2  text-sm mt-5 overflow-y-auto'>
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} className='flex flex-col gap-2'>
                      <a
                        href='/'
                        className='flex h-10 items-center gap-2 rounded-lg px-2 font-medium hover:bg-dark-secondary'
                      >
                        <div className='flex items-center justify-center h-6 w-6'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'
                            viewBox='0 0 24 24'
                            className='icon-md'
                          >
                            <path
                              fill='currentColor'
                              fillRule='evenodd'
                              d='M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10A10 10 0 0 1 12 2zm0 2a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8zm1 3v8h-2V7h2zm0 9v2h-2v-2h2z'
                              clipRule='evenodd'
                            ></path>
                          </svg>
                        </div>
                        <span className='text-sm'>Explore GPTs</span>
                      </a>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
