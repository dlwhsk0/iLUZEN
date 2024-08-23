import InfoCard from '../../components/InfoCard'
import iluzenBlack from '../../images/iluzen/iluzen-textblack.png'
import iluzenBlue from '../../images/iluzen/iluzen-text.png'
import config from '../../config/config'

export default function Info() {
  return (
    <div
      id='회사소개'
      className='w-full px-[60px] flex items-center justify-center'
    >
      <div className='w-[1280px] min-w-[620px] flex flex-col items-center justify-center gap-5'>
        {/*<div className='w-[1280px] flex flex-col items-center justify-center'>*/}
        {/*  /!*<img src={iluzenBlack} className='h-[50px]' />*!/*/}
        {/*  <img src={iluzenBlue} className='h-[50px]' />*/}
        {/*  /!*<span className='font-bold text-[40px] text-[#002970]'>*!/*/}
        {/*  /!*  {config.companyName} |*!/*/}
        {/*  /!*</span>*!/*/}
        {/*  /!*<span className='font-bold text-[25px] text-[#002970]'>*!/*/}
        {/*  /!*  주식회사 이루젠*!/*/}
        {/*  /!*</span>*!/*/}
        {/*  <span className='text-[25px] text-gray-800'>주식회사 이루젠</span>*/}
        {/*</div>*/}
        <div className='w-[1280px] flex justify-center gap-3'>
          <img src={iluzenBlue} className='h-[50px]' />
          <span className='text-[#002970] text-[30px]'>|</span>
          <span className='text-[30px] text-gray-800 pt-[2px]'>
            주식회사 이루젠
          </span>
        </div>
        <div className='w-full grid grid-cols-2 grid-rows-2 gap-5'>
          <InfoCard content={'혁신'} />
          <InfoCard content={'정확하고 신속한 설계'} />
          <InfoCard content={'더미 멘트'} />
          <InfoCard content={'예'} />
        </div>
      </div>
    </div>
  )
}
