import { twc } from 'react-twc'

type BoxProps = React.ComponentProps<'div'> & { $isBot?: boolean }

const Box = twc.div<BoxProps>(({ $isBot }) => [
  'px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-2xl pl-6 pr-16 py-2 border border-zinc-700 text-white text-lg resize-none overflow-hidden text-pretty ',
  $isBot ? 'bg-zinc-800 rounded-bl-none' : 'bg-zinc-700 rounded-br-none'
])

export default Box
