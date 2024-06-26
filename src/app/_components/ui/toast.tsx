import { Toaster } from 'react-hot-toast'

export const Toast = () => (
  <Toaster
    position='top-center'
    reverseOrder={false}
    gutter={8}
    containerClassName=''
    toastOptions={{
      duration: 5000,
      success: {
        duration: 1000,
        icon: '✅',
        style: {
          background: '#10B981',
          color: '#fff',
          borderRadius: '2rem'
        }
      },
      error: {
        duration: 1000,
        icon: '❌',
        style: {
          background: '#EF4444',
          color: '#fff',
          borderRadius: '2rem'
        }
      }
    }}
  />
)
