import InfoCard from '../../components/InfoCard'
import iluzenText from '../../images/iluzen/iluzen-text.png'
import config from '../../config/config'

export default function Info() {
  return (
    <div
      id='회사소개'
      className='w-full px-[60px] flex items-center justify-center'
    >
      <div className='w-[1280px] min-w-[620px] flex flex-col items-center justify-center gap-5'>
        <span className='font-bold text-[40px] text-[#002970]'>
          {config.companyName} |
        </span>
        <div className='w-full h-[700px] grid grid-cols-2 grid-rows-2 gap-5'>
          <InfoCard content={'혁신'} />
          <InfoCard content={'정확하고 신속한 설계'} />
          <InfoCard content={'더미 멘트'} />
          <InfoCard content={'예'} />
        </div>
      </div>
    </div>
  )
}
