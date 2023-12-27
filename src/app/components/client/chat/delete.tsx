import { DeleteIcon } from '@components/icons'
import { useChatStore } from '@app/context'

interface DeleteProps {
  id: string
}

function Delete ({ id }: DeleteProps): JSX.Element {
  const { deleteChat } = useChatStore()
  return (
    <button onClick={() => {
      deleteChat(id)
    }}>
        <DeleteIcon className='tex-white hover:text-red-500' />
      </button>
  )
}

export default Delete
