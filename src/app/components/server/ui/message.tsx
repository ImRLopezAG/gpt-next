import { twc } from 'react-twc'
import type { TwcComponentProps } from 'react-twc'

type BoxProps = TwcComponentProps<'section'> & { $isBot?: boolean }

const MessageBox = twc.section<BoxProps>(({ $isBot }) => [
  'flex flex-row items-baseline rounded-xl p-2 gap-2 w-fit h-fit',
  !$isBot && 'flex-row-reverse bg-blue-600 bg-opacity-50 justify-end',
  $isBot && 'bg-zinc-700'
])

export { MessageBox }
