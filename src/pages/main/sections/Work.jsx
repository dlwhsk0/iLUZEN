import work from '../../../images/work.png'
import config from '../../../config/config'

export default function Work() {
  return (
    <div
      id='업무소개'
      className='w-full p-[60px] flex items-center justify-center bg-gray-100'
    >
      <div className='w-[1280px] min-w-[620px] flex flex-col justify-center items-center gap-5'>
        <div>
          <span className='font-bold text-[#002970] text-[30px] mr-3'>
            업무 소개 |
          </span>
          <span className='text-[22px] text-gray-800'>
            끊임없는 혁신을 추구하는 {config.companyName}
          </span>
        </div>
        <div className=''>
          <img src={work} alt='work' className='h-[500px] object-contain' />
        </div>
      </div>
    </div>
  )
}
