import intro from '../../assets/intro.webp'
import IntroIcon from '../../components/IntroIcon'
import icon1 from '../../assets/icons/icon-1.svg'
import icon2 from '../../assets/icons/icon-2.svg'
import icon3 from '../../assets/icons/icon-3.svg'
import icon4 from '../../assets/icons/icon-4.svg'
import icon5 from '../../assets/icons/icon-5.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import Carousel from '../../components/Carousel'
import { ServiceBox } from '../../components/ServiceBox'
import { useState } from 'react'
import { mainContent } from '../../data/content/main'

const iconMap = {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}

export default function Main() {
  const [hovered, setHovered] = useState(null)
  return (
    <div className='w-full h-full flex flex-col items-center gap-[200px]'>
      {/* 인트로 이미지 및 아이콘 */}
      <div className='w-full'>
        <div className='w-full h-[800px] relative flex items-center justify-center'>
          <img
            src={intro}
            className='w-full h-full object-cover'
            style={{ objectPosition: 'center 44%' }}
            alt='info'
          />
          <span
            className='absolute z-[10] text-[50px] text-white text-center'
            style={{
              textShadow: '2px 5px 10px rgba(0, 0, 0, 0.49)',
            }}
          >
            {mainContent.hero.title}
          </span>
        </div>
        <div className='bg-[#1A1C1E] w-full h-[280px] pt-[80px] flex flex-col items-center justify-between gap-[20px]'>
          <div className='flex items-center justify-center gap-[80px]'>
            {mainContent.introIcons.map((item, index) => (
              <IntroIcon
                key={index}
                icon={iconMap[item.icon]}
                text={item.title}
              />
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
        <div className='text-[30px] font-light mb-[30px]'>
          {mainContent.services.title}
        </div>

        <div className='w-full h-[550px] grid grid-cols-9 gap-3 transition-all duration-300'>
          {/* 왼쪽 큰 박스 */}
          <div className='h-full col-span-5 text-white rounded-lg flex flex-col justify-center items-center shadow-lg overflow-hidden'>
            <ServiceBox
              src={mainContent.services.items[0].image}
              alt={mainContent.services.items[0].title}
              title={mainContent.services.items[0].title}
              content={mainContent.services.items[0].description}
            />
          </div>

          {/* 오른쪽 작은 박스들 */}
          <div className='h-[550px] col-span-4 grid grid-cols-2 grid-rows-2 gap-3 relative'>
            <div
              className={`rounded-lg shadow-lg flex items-center justify-center text-center transition-all duration-[800ms] cursor-pointer overflow-hidden group ${hovered === 1 ? 'absolute w-full h-full top-0 left-0 z-10' : 'relative'}`}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <ServiceBox
                src={mainContent.services.items[1].image}
                alt={mainContent.services.items[1].title}
                title={mainContent.services.items[1].title}
                content={mainContent.services.items[1].description}
              />
            </div>
            <div
              className={`rounded-lg shadow-lg flex items-center justify-center text-center row-span-2 transition-all duration-[800ms] cursor-pointer overflow-hidden group ${hovered === 2 ? 'absolute w-full h-full top-0 left-0 z-10' : 'relative'}`}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <ServiceBox
                src={mainContent.services.items[3].image}
                alt={mainContent.services.items[3].title}
                title={mainContent.services.items[3].title}
                content={mainContent.services.items[3].description}
              />
            </div>
            <div
              className={`rounded-lg shadow-lg flex items-center justify-center text-center transition-all duration-[800ms] cursor-pointer overflow-hidden group ${hovered === 3 ? 'absolute w-full h-full top-0 left-0 z-10' : 'relative'}`}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
            >
              <ServiceBox
                src={mainContent.services.items[2].image}
                alt={mainContent.services.items[2].title}
                title={mainContent.services.items[2].title}
                content={mainContent.services.items[2].description}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 이루젠 디자인 */}
      <div className='w-full mb-[200px] flex flex-col items-center justify-center'>
        {/* 타이틀 */}
        <div className='w-[1280px] mb-[30px]'>
          <span className='text-[30px] font-light'>
            {mainContent.design.title}
          </span>
        </div>
        {/* 캐러셀 */}
        <div className='w-full h-[450px] bg-[#F2F1F1]'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
