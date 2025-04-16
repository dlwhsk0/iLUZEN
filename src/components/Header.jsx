import logo from '../assets/iluzen/iluzen-logo.png'
import { useNavigate, useLocation } from 'react-router-dom'

const pages = [
  ['company', '회사개요'],
  ['business', '사업분야'],
  ['design', '설계품목'],
  ['support', '고객지원'],
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation() // 현재 경로 가져오기

  return (
    <div className='w-full h-[60px] py-1 flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-white'>
      <div className='w-full max-w-[1280px] flex flex-col sm:flex-row gap-1 items-center justify-center sm:justify-between transition-all duration-[800ms]'>
        <img
          src={logo}
          className='w-[120px] object-contain cursor-pointer'
          alt='iluzen logo'
          onClick={() => navigate('/')}
        />
        <div className='w-full border sm:hidden' />
        <nav className='w-[400px] text-[16px] text-gray-600 flex items-center justify-between'>
          {pages.map(([path, label], index) => {
            const isActive = location.pathname === `/${path}` // 현재 경로 확인
            return (
              <div
                key={index}
                className={`cursor-pointer ${
                  isActive
                    ? 'text-[var(--brand-color)] font-bold relative after:content-[""] after:absolute after:w-full after:h-[2.5px] after:bg-[var(--brand-color)] after:bottom-[-6px] after:left-0'
                    : 'text-gray-600 hover:text-[var(--brand-color)] hover:font-bold relative after:content-[""] after:absolute after:w-0 after:h-[2.5px] after:bg-[var(--brand-color)] after:bottom-[-6px] after:left-0 hover:after:w-full after:transition-all after:duration-500'
                }`}
                onClick={() => navigate(`/${path}`)}
              >
                <span>{label}</span>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
