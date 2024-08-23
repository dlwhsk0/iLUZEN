import { useState } from 'react'
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

    //   if (sectionElement) {
    //     if (sectionId === '회사소개') {
    //       // '회사소개'일 경우, 중앙에서 200px 더 내려가도록 스크롤 위치를 조정합니다.
    //       const offsetTop =
    //         sectionElement.getBoundingClientRect().top + window.pageYOffset - 100
    //       window.scrollTo({
    //         top: offsetTop,
    //         behavior: 'smooth',
    //       })
    //     } else {
    //       // 일반적인 경우 중앙으로 이동
    //       sectionElement.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'center', // 중앙에 위치시키기
    //       })
    //     }
    //   } else {
    //     console.error('Section not found:', sectionId)
    //   }
  }

  return (
    <div
      className='w-full h-[50px] px-[60px] py-0 flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-white'
      style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)' }}
    >
      <div className='w-[1280px] min-w-[620px] flex items-center justify-between'>
        <img src={logo} className='w-[150px]' alt='iluzen logo' />
        <div className='w-[40%] min-w-[350px] text-[16px] flex items-center justify-between'>
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
        </div>
      </div>
    </div>
  )
}
