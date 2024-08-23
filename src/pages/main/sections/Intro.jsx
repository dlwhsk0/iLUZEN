import intro from '../../../images/intro.jpeg'
import IntroScrollBar from '../../../components/IntroScrollBar'

export default function Intro() {
  return (
    //<div className='w-full h-[100vh] mt-[40px] relative flex items-center justify-center'>
    <div className='w-full h-[850px] mt-[40px] relative flex items-center justify-center'>
      <img
        src={intro}
        className='w-full h-full object-cover object-center'
        alt='info'
      />
      <span className='absolute z-[10] text-[70px] text-white text-center font-bold pb-[100px]'>
        Building the reality,
        <br />
        connecting the future.
      </span>
      <IntroScrollBar />
    </div>
  )
}
