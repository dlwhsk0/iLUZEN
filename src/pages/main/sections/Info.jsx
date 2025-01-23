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

  // "이루젠"을 강조한 텍스트
  const emphasizeIluzen = (text, fontSize = '1.2em') => (
    <span style={{ color: '#002970', fontSize, fontWeight: 'bold' }}>
      {text}
    </span>
  )

  return (
    <div className='w-full px-[30px] sm:px-[60px] flex items-center justify-center transition-all duration-[800ms]'>
      <div className='w-full max-w-[1280px] flex flex-col items-center justify-center gap-7'></div>
    </div>
  )
}
