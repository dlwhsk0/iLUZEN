import intro from '../../../images/intro.jpg'
import icon1 from '../../../assets/icons/icon-1.svg'
import icon2 from '../../../assets/icons/icon-2.svg'
import icon3 from '../../../assets/icons/icon-3.svg'
import icon4 from '../../../assets/icons/icon-4.svg'
import icon5 from '../../../assets/icons/icon-5.svg'
import arrowDown from '../../../assets/icons/arrow-down.svg'
import IntroIcon from '../../../components/introIcon'

// import IntroScrollBar from '../../../components/IntroScrollBar'

export default function Intro() {
  return (
    // h-[850px] h-[90vh]
    <div className='w-full h-full mt-[60px]'>
      <div
        id='인트로'
        className='w-full h-[850px] relative flex items-center justify-center'
      >
        <img
          src={intro}
          className='w-full h-full object-cover object-center'
          alt='info'
        />
        <span
          className='absolute z-[10] text-[50px] text-white text-center'
          style={{
            textShadow: '2px 5px 10px rgba(0, 0, 0, 0.49)',
          }}
        >
          "Building Confidence Through Expert Scaffold Design"
        </span>
      </div>
      <div className='bg-[#1A1C1E] w-full h-[280px] pt-[60px] flex flex-col items-center justify-between gap-[20px]'>
        <div className='flex items-center justify-center gap-[100px]'>
          <IntroIcon icon={icon1} text={'시 스 템 도 면'} />
          <IntroIcon icon={icon2} text={'구 조 검 토'} />
          <IntroIcon icon={icon3} text={'현 장 상 담'} />
          <IntroIcon icon={icon4} text={'가 설 재 도 면'} />
          <IntroIcon icon={icon5} text={'맞 춤 양 식 제 작'} />
        </div>
        <img
          src={arrowDown}
          className='w-[30px] h-[30px] mb-[30px]'
          alt='arrowDown'
        />
      </div>
    </div>
  )
}
