import { useState, useEffect } from 'react'
import logo from '../images/iluzen/iluzen-logo.png'

export default function Header() {
  const [active, setActive] = useState('')

  const handleClick = (sectionId) => {
    setActive(sectionId)
    const sectionElement = document.querySelector(`#${sectionId}`)

    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center', // 중앙에 위치시키기
      })
    } else {
      console.error('Section not found:', sectionId)
    }
  }

  useEffect(() => {
    const sectionIds = ['회사소개', '업무소개', '설계품목', '고객지원']

    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.6, // 섹션이 60% 이상 화면에 보일 때 활성화
    })

    sectionIds.forEach((id) => {
      const section = document.querySelector(`#${id}`)
      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const section = document.querySelector(`#${id}`)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  return (
    <div
      className='w-full h-[50px] px-[60px] py-0 flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-white'
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)' }}
    >
      <div className='w-[1280px] min-w-[620px] flex items-center justify-between'>
        <img src={logo} className='w-[150px]' alt='iluzen logo' />
        <nav className='w-[40%] min-w-[350px] text-[16px] flex items-center justify-between'>
          <span
            className={`cursor-pointer ${active === '회사소개' ? 'text-[#002970] font-bold' : ''}`}
            onClick={() => handleClick('회사소개')}
          >
            회사소개
          </span>
          <span
            className={`cursor-pointer ${active === '업무소개' ? 'text-[#002970] font-bold' : ''}`}
            onClick={() => handleClick('업무소개')}
          >
            업무소개
          </span>
          <span
            className={`cursor-pointer ${active === '설계품목' ? 'text-[#002970] font-bold' : ''}`}
            onClick={() => handleClick('설계품목')}
          >
            설계품목
          </span>
          <span
            className={`cursor-pointer ${active === '고객지원' ? 'text-[#002970] font-bold' : ''}`}
            onClick={() => handleClick('고객지원')}
          >
            고객지원
          </span>
        </nav>
      </div>
    </div>
  )
}
