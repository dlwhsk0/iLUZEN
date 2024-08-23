import contact from '../../../images/contact.jpeg'
import contact1 from '../../../images/contact1.png'
import contact2 from '../../../images/contact2.png'
import config from '../../../config/config'

export default function Contact() {
  const handleRequestClick = () => {
    window.open('/request', '_blank', 'width=600,height=800,left=200,top=100')
  }

  return (
    <div
      id='고객지원'
      className='w-full h-[450px] relative p-[60px] flex items-center justify-center'
    >
      <img
        src={contact}
        className='absolute inset-0 w-full h-full object-cover z-[-10]'
        alt=''
      />
      <div className='w-[1280px] flex flex-col gap-7'>
        <div className='text-white text-[28px]'>
          {config.companyName.en}은 앞선 생각으로 새로운 미래를 창조합니다.
        </div>
        <div className='flex gap-[40px] text-[22px]'>
          <div
            className='w-[375px] h-[95px] flex items-center border border-black bg-white cursor-pointer'
            onClick={handleRequestClick}
          >
            <img
              src={contact1}
              className='h-[30px] object-contain ml-[50px] mr-5'
              alt=''
            />
            <span>작업 의뢰</span>
          </div>
          <div className='w-[375px] h-[95px] flex items-center border border-black bg-white cursor-pointer'>
            <img
              src={contact2}
              className='h-[35px] object-contain ml-[50px] mr-5'
              alt=''
            />
            <span>채용 문의</span>
          </div>
        </div>
      </div>
    </div>
  )
}
