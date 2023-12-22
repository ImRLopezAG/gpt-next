import { twc } from 'react-twc'

type PictureProps = React.ComponentProps<'span'> & { $isBot?: boolean }

const Picture = twc.div<PictureProps>(({ $isBot }) => [
  'inline-block text-center size-7 mr-2 rounded-full flex-shrink-0',
  $isBot ? 'bg-green-500' : 'bg-blue-500'
])

export default Picture
