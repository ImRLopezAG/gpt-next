import { DeleteIcon } from '@components/icons'
import { useChats } from '@app/hooks'
interface DeleteProps {
  id: string
}

function Delete ({ id }: DeleteProps): JSX.Element {
  const { deleteChat, createChat, current } = useChats()
  return (
    <button onClick={() => {
      deleteChat(id)
      if (current === id) {
        createChat()
      }
    }}>
        <DeleteIcon className='tex-white hover:text-red-500' />
      </button>
  )
}

export default Delete
