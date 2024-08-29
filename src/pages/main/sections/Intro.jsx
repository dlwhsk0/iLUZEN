import intro from '../../../images/intro2.jpg'
import IntroScrollBar from '../../../components/IntroScrollBar'

export default function Intro() {
  return (
    // h-[850px] h-[90vh]
    <div className='w-full h-[90vh] mt-[35px] sm:mt-[40px] relative flex items-center justify-center'>
      <img
        src={intro}
        className='w-full h-full object-cover object-center'
        alt='info'
      />
      <span className='absolute z-[10] text-[70px] px-[30px] text-white text-center font-bold pb-[100px] transition-all duration-[800ms]'>
        Building the reality,
        <br />
        connecting the future.
      </span>
      <IntroScrollBar />
    </div>
  )
}
