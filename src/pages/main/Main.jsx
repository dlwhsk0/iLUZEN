import Contact from './sections/Contact'
import Intro from './sections/Intro'
import Work from './sections/Work'
import Items from './sections/Items'
import Info from './sections/Info'

export default function Main() {
  return (
    <div className='w-full h-full flex flex-col gap-[150px]'>
      <Intro />
      <Info />
      <Work />
      <Items />
      <Contact />
    </div>
  )
}
