import type { TwcComponentProps } from 'react-twc'
import { twc } from 'react-twc'

type BoxProps = TwcComponentProps<'section'> & { $isBot?: boolean }

const MessageBox = twc.section<BoxProps>(({ $isBot }) => [
  'flex flex-row items-baseline rounded-xl p-2 gap-2 size-full',
  !$isBot && 'flex-row-reverse bg-fg-primary bg-opacity-50 justify-end',
  $isBot && 'bg-fg-secondary bg-opacity-40'
])

export { MessageBox }
