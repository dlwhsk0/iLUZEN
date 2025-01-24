import intro from '../../assets/intro.jpg'
import IntroIcon from '../../components/introIcon'
import icon1 from '../../assets/icons/icon-1.svg'
import icon2 from '../../assets/icons/icon-2.svg'
import icon3 from '../../assets/icons/icon-3.svg'
import icon4 from '../../assets/icons/icon-4.svg'
import icon5 from '../../assets/icons/icon-5.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import info1 from '../..//assets/mainInfo/info1.jpeg'
// import info2 from '../..//assets/mainInfo/info2.jpeg'
import info3 from '../..//assets/mainInfo/info3.jpeg'
import info4 from '../..//assets/mainInfo/info4.jpeg'
import Carousel from '../../components/Carousel'
import rectangle from '../../assets/mainInfo/rectangle21.png'
import { ServiceBox } from '../../components/ServiceBox'

const introIcons = [
  ['시스템도면', icon1],
  ['구조검토', icon2],
  ['현장상담', icon3],
  ['가설재도면', icon4],
  ['맞춤양식제작', icon5],
]

export default function Main() {
  return (
    <div className='w-full h-full flex flex-col items-center gap-[200px]'>
      {/* 인트로 이미지 및 아이콘 */}
      <div className='w-full'>
        <div className='w-full h-[850px] relative flex items-center justify-center'>
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
            &quot;Building Confidence Through Expert Scaffold Design&quot;
          </span>
        </div>
        <div className='bg-[#1A1C1E] w-full h-[280px] pt-[80px] flex flex-col items-center justify-between gap-[20px]'>
          <div className='flex items-center justify-center gap-[80px]'>
            {introIcons.map((item, index) => (
              <IntroIcon key={index} icon={item[1]} text={item[0]} />
            ))}
          </div>
          <img
            src={arrowDown}
            className='w-[30px] h-[30px] mb-[30px]'
            alt='arrowDown'
          />
        </div>
      </div>
      {/* 이루젠 서비스 */}
      <div className='w-[1280px] mx-auto'>
        {/* 타이틀 */}
        <div className='text-[30px] font-light mb-[30px]'>iLUZEN Service</div>
        {/* 서비스 박스 */}
        <div className='w-full h-[600px] flex gap-2'>
          {/* 주식회사 이루젠 (왼쪽 큰 박스) */}
          <div className='relative w-[54%] h-full rounded-lg overflow-hidden'>
            <ServiceBox
              src={rectangle}
              alt='주식회사 이루젠'
              text='주식회사 이루젠'
            />
          </div>
          {/* 핵심 역량, 제공 서비스 (중앙 박스) */}
          <div className='h-full relative w-[21%] h-full flex flex-col items-center justify-center gap-2'>
            <div className='h-full relative rounded-lg overflow-hidden'>
              <ServiceBox src={info4} alt='핵심 역량' text='핵심 역량' />
            </div>
            <div className='h-full relative rounded-lg overflow-hidden'>
              <ServiceBox src={info3} alt='제공 서비스' text='제공 서비스' />
            </div>
          </div>
          {/* 비전 및 목표 (오른쪽 길게 확장된 박스) */}
          <div className='relative w-[21%] h-full rounded-lg overflow-hidden'>
            <ServiceBox src={info1} alt='비전 및 목표' text='비전 및 목표' />
          </div>
        </div>
      </div>

      {/* 이루젠 디자인 */}
      <div className='w-full mb-[200px] flex flex-col items-center justify-center'>
        {/* 타이틀 */}
        <div className='w-[1280px] mb-[30px]'>
          <span className='text-[30px] font-light'>iLUZEN Design</span>
        </div>
        {/* 캐러셀 */}
        <div className='w-full h-[450px] bg-[#F2F1F1]'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
