import { useRef } from 'react'
import InfoCard from '../../../components/InfoCard'
import iluzenBlue from '../../../images/iluzen/iluzen-text.png'
import pipeSupport from '../../../images/pipesupport.png'
import ganggwanBigye from '../../../images/ganggwanbigye.png'
import systemDongbari from '../../../images/systemdongbari.png'
import systemBigye from '../../../images/systembigye.png'
import config from '../../../config/config'

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
        window.pageYOffset -
        (windowHeight / 2 - containerRect.height / 2) +
        150

      window.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div
      id='회사소개'
      className='w-full px-[60px] flex items-center justify-center'
    >
      <div className='w-[1280px] min-w-[720px] flex flex-col items-center justify-center gap-5'>
        <div className='flex justify-center gap-3'>
          <img src={iluzenBlue} className='h-[50px]' alt='' />
          <span className='text-[#002970] text-[30px]'>|</span>
          <span className='text-[30px] text-gray-800 pt-[2px]'>
            주식회사 {config.companyName.kr}
          </span>
        </div>
        <div
          ref={scrollContainerRef}
          className='w-full h-full grid grid-cols-4 gap-5'
          onMouseEnter={handleMouseEnter}
        >
          <InfoCard content={'혁신'} src={systemBigye} />
          <InfoCard content={'정확하고 신속한 설계'} src={pipeSupport} />
          <InfoCard content={'더미 멘트'} src={ganggwanBigye} />
          <InfoCard content={'예'} src={systemDongbari} />
        </div>
      </div>
    </div>
  )
}
