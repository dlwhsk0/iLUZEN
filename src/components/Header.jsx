import logo from '../assets/iluzen/iluzen-logo.png'
import { useNavigate } from 'react-router-dom'

const pages = [
  ['company', '회사개요'],
  ['business', '업무소개'],
  ['design', '설계품목'],
  ['support', '고객지원'],
]

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='w-full h-[60px] py-1 flex items-center justify-center fixed top-0 left-0 right-0 z-50 bg-white/40'>
      <div className='w-full max-w-[1280px] flex flex-col sm:flex-row gap-1 items-center justify-center sm:justify-between transition-all duration-[800ms]'>
        <img
          src={logo}
          className='w-[120px] object-contain cursor-pointer'
          alt='iluzen logo'
          onClick={() => navigate('/')}
        />
        <div className='w-full border sm:hidden' />
        <nav className='w-[400px] text-[16px] text-gray-600 flex items-center justify-between'>
          {pages.map((page, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:text-[#002970] hover:font-bold`}
            >
              <span onClick={() => navigate(`/${page[0]}`)}>{page[1]}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
