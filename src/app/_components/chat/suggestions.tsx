import { LogoIcon } from '@components/icons'
export const Suggestions = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-dark-secondary'>
      <LogoIcon className='size-12' />
      <div className='opacity-100'>
        <div className='mx-3 mt-12 flex max-w-3xl flex-wrap items-stretch justify-center gap-4'>
          <div className='flex max-w-3xl flex-wrap items-stretch justify-center gap-4'>
            <button className='relative flex w-40 flex-col gap-2 rounded-2xl border border-fg-secondary px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-[0_0_2px_0_rgba(0,0,0,0.05),0_4px_6px_0_rgba(0,0,0,0.02)] transition hover:bg-fg-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='text-red-400'
              >
                <path
                  fill='currentColor'
                  fillRule='evenodd'
                  d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.293 4.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L8.586 12l-1.293-1.293a1 1 0 0 1 0-1.414M12 14a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1'
                  clipRule='evenodd'
                ></path>
              </svg>
              <div className='line-clamp-3 text-balance text-gray-400 text-sm'>
                Python script for daily email reports
              </div>
            </button>
            <button className='relative flex w-40 flex-col gap-2 rounded-2xl border border-fg-secondary px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-[0_0_2px_0_rgba(0,0,0,0.05),0_4px_6px_0_rgba(0,0,0,0.02)] transition hover:bg-fg-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='text-cyan-300'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='2'
                  d='M3 6h7M3 10h4'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13.428 17.572 20.5 10.5a2.828 2.828 0 1 0-4-4l-7.072 7.072a2 2 0 0 0-.547 1.022L8 19l4.406-.881a2 2 0 0 0 1.022-.547'
                ></path>
              </svg>
              <div className='line-clamp-3 text-balance text-gray-400 text-sm'>
                Create a workout plan
              </div>
            </button>
          </div>
          <div className='flex max-w-3xl flex-wrap items-stretch justify-center gap-4'>
            <button className='relative flex w-40 flex-col gap-2 rounded-2xl border border-fg-secondary px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-[0_0_2px_0_rgba(0,0,0,0.05),0_4px_6px_0_rgba(0,0,0,0.02)] transition hover:bg-fg-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='text-green-300'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m9.65 13.026-3.287 1.19A2 2 0 0 1 3.8 13.027l-.342-.934.597-1.275L1.75 7.419l2.348-.85 2.564 1.484a2 2 0 0 0 1.689.15l8.512-3.083c.291-.106.603-.142.912-.107l2.833.325a1.842 1.842 0 0 1 .422 3.565l-5.276 1.911m.598-1.275L13 14.5l-2.817 1.02-.343-3.622'
                ></path>
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='2'
                  d='M3 19h18'
                ></path>
              </svg>
              <div className='line-clamp-3 text-balance text-gray-400 text-sm'>
                Experience Seoul like a local
              </div>
            </button>
            <button className='relative flex w-40 flex-col gap-2 rounded-2xl border border-fg-secondary px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-[0_0_2px_0_rgba(0,0,0,0.05),0_4px_6px_0_rgba(0,0,0,0.02)] transition hover:bg-fg-primary'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='text-yellow-300'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 19a3 3 0 1 1-6 0M15.865 16A7.54 7.54 0 0 0 19.5 9.538C19.5 5.375 16.142 2 12 2S4.5 5.375 4.5 9.538A7.54 7.54 0 0 0 8.135 16m7.73 0h-7.73m7.73 0v3h-7.73v-3'
                ></path>
              </svg>
              <div className='line-clamp-3 text-balance text-gray-400 text-sm'>
                Design a fun coding game
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
