import { useCallback } from 'react'
import logo_white from '../images/iluzen-logo-white.png'
import config from '../config/config'

export default function Footer() {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='w-full h-[500px] mt-[150px] px-[60px] py-[100px] bg-[#181818] flex items-center justify-center'>
      <div className='w-[1280px] min-w-[720px] h-full flex items-center justify-center flex-col gap-[70px]'>
        <div className='w-full flex items-center'>
          <img
            src={logo_white}
            className='w-[150px] mr-[100px] cursor-pointer'
            alt='iluzen logo'
            onClick={scrollToTop}
          />
          <div className='min-w-[370px] text-[18px] font-bold flex items-center gap-10 text-white'>
            <span
              onClick={() => scrollToSection('회사소개')}
              className='cursor-pointer'
            >
              회사소개
            </span>
            <span
              onClick={() => scrollToSection('업무소개')}
              className='cursor-pointer'
            >
              업무소개
            </span>
            <span
              onClick={() => scrollToSection('설계품목')}
              className='cursor-pointer'
            >
              설계품목
            </span>
            <span
              onClick={() => scrollToSection('고객지원')}
              className='cursor-pointer'
            >
              고객지원
            </span>
          </div>
        </div>
        <div className='w-full flex items-center text-[#ECECEC]'>
          <div className='w-full flex flex-col gap-2 text-[12px]'>
            <span>회사명 | {config.companyName.en}</span>
            <span>대표자 | {config.contactInfo.representative}</span>
            <span>이메일 | {config.contactInfo.email}</span>
            <span>전화 | {config.contactInfo.phone}</span>
            <span>사업자등록번호 | {config.contactInfo.businessNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
