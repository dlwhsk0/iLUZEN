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
            "Building Confidence Through Expert Scaffold Design"
          </span>
        </div>
        <div className='bg-[#1A1C1E] w-full h-[280px] pt-[60px] flex flex-col items-center justify-between gap-[20px]'>
          <div className='flex items-center justify-center gap-[100px]'>
            <IntroIcon icon={icon1} text={'시스템도면'} />
            <IntroIcon icon={icon2} text={'구조검토'} />
            <IntroIcon icon={icon3} text={'현장상담'} />
            <IntroIcon icon={icon4} text={'가설재도면'} />
            <IntroIcon icon={icon5} text={'맞춤양식제작'} />
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

        {/* 그리드 레이아웃 */}
        <div className='w-full h-[600px] flex gap-2'>
          {/* 회사 개요 (왼쪽 큰 박스) */}
          <div className='relative w-[54%] h-full rounded-lg overflow-hidden'>
            <img
              // src={info2}
              src={rectangle}
              alt='주식회사 이루젠'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='absolute inset-0 m-[12px] border-white/50 border-[1.5px] rounded-lg'>
              <span className='absolute bottom-4 left-4 text-white text-[25px] font-bold'>
                주식회사 이루젠
              </span>
            </div>
          </div>

          <div className='h-full relative w-[21%] h-full flex flex-col items-center justify-center gap-2'>
            {/*핵심 역량 (오른쪽 상단 박스)*/}
            <div className='h-full relative rounded-lg border border-white overflow-hidden'>
              <img
                src={info4}
                alt='핵심 역량'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black/30'></div>
              <div className='absolute inset-0 m-[12px] border-white/50 border-[1.5px] rounded-lg'>
                <span className='absolute bottom-4 left-4 text-white text-[25px] font-bold'>
                  핵심 역량
                </span>
              </div>
            </div>
            {/* 제공 서비스 (오른쪽 중간 박스) */}
            <div className='h-full relative rounded-lg border border-white overflow-hidden'>
              <img
                src={info3}
                alt='제공 서비스'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-black/30'></div>
              <div className='absolute inset-0 m-[12px] border-white/50 border-[1.5px] rounded-lg'>
                <span className='absolute bottom-4 left-4 text-white text-[25px] font-bold'>
                  제공 서비스
                </span>
              </div>
            </div>
          </div>

          {/* 비전 및 목표 (오른쪽 길게 확장된 박스) */}
          <div className='relative w-[21%] h-full rounded-lg border border-white overflow-hidden'>
            <img
              src={info1}
              alt='비전 및 목표'
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/30'></div>
            <div className='absolute inset-0 m-[12px] border-white/50 border-[1.5px] rounded-lg'>
              <span className='absolute bottom-4 left-4 text-white text-[25px] font-bold'>
                비전 및 목표
              </span>
            </div>
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
        <div className='w-full h-[500px] bg-[#F2F1F1]'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
