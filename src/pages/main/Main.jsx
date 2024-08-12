import Contact from './Contact'
import Intro from './Intro'
import Work from './Work'
// import ItemsVer1 from './ItemsVer1'
// import ItemsVer2 from './ItemsVer2'
import Info from './Info'
import ItemsVer3 from './ItemsVer3'

export default function Main() {
  return (
    <div className='w-full h-full flex flex-col gap-[150px]'>
      <Intro />
      <Info />
      <Work />
      {/*<ItemsVer2 />*/}
      {/*<ItemsVer1 />*/}
      <ItemsVer3 />
      <Contact />
    </div>
  )
}
