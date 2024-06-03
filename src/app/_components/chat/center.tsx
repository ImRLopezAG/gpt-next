import { cx } from 'react-twc'
interface CenterProps {
  children: React.ReactNode
  className?: string
  wrapperClassName?: string
}
export const Center: React.FC<CenterProps> = ({
  children,
  className,
  wrapperClassName
}) => {
  return (
    <div
      className={cx(
        'px-3 text-base mx-auto md:px-5 lg:px-1 xl:px-5 min-w-full bg-dark-secondary',
        className
      )}
    >
      <div
        className={cx(
          'mx-auto flex flex-1 text-base gap-4 md:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]',
          wrapperClassName
        )}
      >
        {children}
      </div>
    </div>
  )
}
