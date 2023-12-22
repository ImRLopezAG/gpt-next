import { HotButton } from '.'
function HotQuestions (): JSX.Element {
  return (
    <div className='grid grid-cols-2 gap-8 mb-12'>
      <HotButton prompt='Compare storytelling techniques in novels and in films' />
      <HotButton prompt='Give me ideas about how to plan my New Years resolutions' />
      <HotButton prompt='Create a blueprint for a small house' />
      <HotButton prompt='Design a website for a small business' />
      <HotButton prompt='Design a database schema for an online merch store' />
      <HotButton prompt='Come up with concepts for a retro-style arcade game' />
    </div>
  )
}

export default HotQuestions
