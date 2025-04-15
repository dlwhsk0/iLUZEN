import intro from '../../assets/intro.webp'
import IntroIcon from '../../components/introIcon'
import icon1 from '../../assets/icons/icon-1.svg'
import icon2 from '../../assets/icons/icon-2.svg'
import icon3 from '../../assets/icons/icon-3.svg'
import icon4 from '../../assets/icons/icon-4.svg'
import icon5 from '../../assets/icons/icon-5.svg'
import arrowDown from '../../assets/icons/arrow-down.svg'
import main4 from '../../assets/mainInfo/main4.webp'
import main3 from '../../assets/mainInfo/main3.webp'
import main2 from '../../assets/mainInfo/main2.webp'
import Carousel from '../../components/Carousel'
import main1 from '../../assets/mainInfo/main1.webp'
import { ServiceBox } from '../../components/ServiceBox'
import { useState } from 'react'

const introIcons = [
  ['시스템도면', icon1],
  ['구조검토', icon2],
  ['현장상담', icon3],
  ['가설재도면', icon4],
  ['맞춤양식제작', icon5],
]

const serviceItems = [
  [
    '주식회사 이루젠',
    '주식회사이루젠은 가설자재 설계도면을 전문으로 하는 기업으로, 건설 현장의 안전성과 효율성을 극대화하는 솔루션을 제공합니다. 2023년 설립된 이후, 체계적인 설계 프로세스와 구조 검토를 통해 현장에서 실현 가능한 안전한 설계를 제공하며, 업계에서 신뢰받는 파트너로 자리매김하고 있습니다.',
  ],
  [
    '핵심 역량',
    '주식회사이루젠의 설계는 단순히 도면 작성에 그치지 않고, 고객의 요구에 맞춘 맞춤형 솔루션을 제공합니다. 풍부한 경험과 전문성, 그리고 설계 품질 향상은 경쟁력의 핵심입니다. 우리는 매뉴얼화된 교육 시스템을 통해 직원들의 역량을 높이고, 최적의 결과물을 제공하기 위해 노력하고 있습니다.',
  ],
  [
    '제공 서비스',
    '주식회사이루젠은 시스템 동바리, 시스템 비계, 파이프 서포트, 단관 비계 등 다양한 가설자재의 설계 서비스를 제공합니다. 고객의 원도면을 바탕으로 설계에 필요한 체크리스트를 확인하고, 시스템 자재를 설계하여 최종 도면을 제출합니다. 이 도면은 구조 검토를 거쳐 안전성과 품질이 보장된 상태로 고객에게 전달됩니다.',
  ],
  [
    '비전 및 목표',
    '이루젠은 가설자재 설계 분야에서 독보적인 전문성을 바탕으로, 건설 현장의 안전을 지키는 데 기여하고자 합니다. 우리는 끊임없는 혁신과 고객 중심의 서비스를 통해 업계를 선도하며, 국내외 시장에서의 영향력을 확장해 나갈 것입니다. 고객과 함께 성장하며, 건설 현장의 안전과 효율을 책임지는 파트너가 되겠습니다.',
  ],
]

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

        <div className='w-full h-[550px] grid grid-cols-9 gap-3 transition-all duration-300'>
          {/* 왼쪽 큰 박스 */}
          <div className='h-full col-span-5 text-white rounded-lg flex flex-col justify-center items-center shadow-lg overflow-hidden'>
            <ServiceBox
              src={main1}
              alt={serviceItems[0][0]}
              title={serviceItems[0][0]}
              content={serviceItems[0][1]}
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
                src={main2}
                alt={serviceItems[1][0]}
                title={serviceItems[1][0]}
                content={serviceItems[1][1]}
              />
            </div>
            <div
              className={`rounded-lg shadow-lg flex items-center justify-center text-center row-span-2 transition-all duration-[800ms] cursor-pointer overflow-hidden group ${hovered === 2 ? 'absolute w-full h-full top-0 left-0 z-10' : 'relative'}`}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <ServiceBox
                src={main4}
                alt={serviceItems[3][0]}
                title={serviceItems[3][0]}
                content={serviceItems[3][1]}
              />
            </div>
            <div
              className={`rounded-lg shadow-lg flex items-center justify-center text-center transition-all duration-[800ms] cursor-pointer overflow-hidden group ${hovered === 3 ? 'absolute w-full h-full top-0 left-0 z-10' : 'relative'}`}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
            >
              <ServiceBox
                src={main3}
                alt={serviceItems[2][0]}
                title={serviceItems[2][0]}
                content={serviceItems[2][1]}
              />
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
        <div className='w-full h-[450px] bg-[#F2F1F1]'>
          <Carousel />
        </div>
      </div>
    </div>
  )
}
