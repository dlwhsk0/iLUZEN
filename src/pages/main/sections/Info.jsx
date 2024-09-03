import { useRef } from 'react'
import InfoCard from '../../../components/InfoCard'
import iluzenBlue from '../../../images/iluzen/iluzen-text.png'
import config from '../../../config/config'
import info1 from '../../../images/info1.jpeg'
import info2 from '../../../images/info2.jpeg'
import info3 from '../../../images/info3.jpeg'
import info4 from '../../../images/info4.jpeg'

export default function Info() {
  const scrollContainerRef = useRef(null)

  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const containerRect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // 중앙보다 150px 아래로 스크롤 위치 계산
      const targetScrollTop =
        containerRect.top +
        window.scrollY -
        (windowHeight / 2 - containerRect.height / 2) +
        150

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      })
    }
  }
  // const handleMouseEnter = () => {
  //   if (scrollContainerRef.current) {
  //     const container = scrollContainerRef.current
  //     const targetScrollTop = container.offsetTop - 150
  //
  //     window.scrollTo({
  //       top: targetScrollTop,
  //       behavior: 'smooth',
  //     })
  //   }
  // }

  return (
    <div
      id='회사소개'
      className='w-full px-[30px] sm:px-[60px] flex items-center justify-center transition-all duration-[800ms]'
    >
      <div className='w-full max-w-[1280px] flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-3'>
          <div className='flex gap-5'>
            <img src={iluzenBlue} className='h-[50px]' alt='' />
            <span className='text-[#002970] text-[30px] hidden sm:block'>
              |
            </span>
          </div>
          <span className='text-[25px] sm:text-[30px] text-gray-800 pt-[2px]'>
            주식회사 {config.companyName.kr}
          </span>
        </div>
        <div
          ref={scrollContainerRef}
          className='w-full h-full grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4'
          onMouseEnter={handleMouseEnter}
        >
          <InfoCard
            title={'1. 회사 개요'}
            content={
              '이루젠은 가설자재 설계도면을 전문으로 하는 기업으로, 건설 현장의 안전성과 효율성을 극대화하는 솔루션을 제공합니다. 2023년 설립된 이후, 체계적인 설계 프로세스와 구조 검토를 통해 현장에서 실현 가능한 안전한 설계를 제공하며, 업계에서 신뢰받는 파트너로 자리매김하고 있습니다.'
            }
            src={info2}
          />
          <InfoCard
            title={'2. 핵심 역량'}
            content={
              '이루젠의 설계는 단순히 도면 작성에 그치지 않고, 고객의 요구에 맞춘 맞춤형 솔루션을 제공합니다. 풍부한 경험과 전문성, 그리고 설계 품질 향상은 경쟁력의 핵심입니다. 우리는 매뉴얼화된 교육 시스템을 통해 직원들의 역량을 높이고, 최적의 결과물을 제공하기 위해 노력하고 있습니다.'
            }
            src={info4}
          />
          <InfoCard
            title={'3. 제공 서비스'}
            content={
              '이루젠은 시스템 동바리, 시스템 비계, 파이프 서포트, 단관 비계 등 다양한 가설자재의 설계 서비스를 제공합니다. 고객의 원도면을 바탕으로 설계에 필요한 체크리스트를 확인하고, 시스템 자재를 설계하여 최종 도면을 제출합니다. 이 도면은 구조 검토를 거쳐 안전성과 품질이 보장된 상태로 고객에게 전달됩니다.'
            }
            src={info3}
          />
          <InfoCard
            title={'4. 비전 및 목표'}
            content={
              '이루젠은 가설자재 설계 분야에서 독보적인 전문성을 바탕으로, 건설 현장의 안전을 지키는 데 기여하고자 합니다. 우리는 끊임없는 혁신과 고객 중심의 서비스를 통해 업계를 선도하며, 국내외 시장에서의 영향력을 확장해 나갈 것입니다. 고객과 함께 성장하며, 건설 현장의 안전과 효율을 책임지는 파트너가 되겠습니다.'
            }
            src={info1}
          />
        </div>
      </div>
    </div>
  )
}
