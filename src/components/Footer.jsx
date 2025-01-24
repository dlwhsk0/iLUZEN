// import logo_white from '../images/iluzen/iluzen-logo-white.png'
import logoSeparation from '../assets/iluzen/logo-separation.png'
import config from '../config/config'

export default function Footer() {
  return (
    <div className='w-full h-[120px] bg-[#181818] flex items-center justify-center'>
      <div className='w-[1280px] h-full flex items-center'>
        <img
          // src={logo_white}
          // className='w-[150px] object-contain mr-[80px]'
          src={logoSeparation}
          className='w-[120px] object-contain mr-[80px]'
          alt='iluzen logo'
        />
        <div className='grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-1 text-[12px] font-light text-[#ECECEC] tracking-widest'>
          <span>주식회사 {config.companyName.kr}</span>
          <span>대표이사 {config.contactInfo.representative}</span>
          <span>사업자등록번호 {config.contactInfo.businessNumber}</span>
          <span>이메일 {config.contactInfo.email}</span>
        </div>
      </div>
    </div>
  )
}
