import { twc } from 'react-twc'
import type { TwcComponentProps } from 'react-twc'

type AvatarType = TwcComponentProps<'span'> & { $isBot?: boolean }

const Avatar = twc.span<AvatarType>(({ $isBot }) => [
  'flex items-center justify-center h-8 w-8 rounded-full truncate',
  $isBot ? 'bg-zinc-700' : 'bg-blue-600'
])

export { Avatar }
