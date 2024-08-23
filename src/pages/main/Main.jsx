import Contact from './Contact'
import Intro from './Intro'
import Work from './Work'
import ItemsVer3 from './ItemsVer3'
import InfoVer1 from './InfoVer1'

export default function Main() {
  return (
    <div className='w-full h-full flex flex-col gap-[150px]'>
      <Intro />
      <InfoVer1 />
      <Work />
      <ItemsVer3 />
      <Contact />
    </div>
  )
}
