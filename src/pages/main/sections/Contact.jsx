import contact from '../../../images/contact.jpeg'
import contact1 from '../../../images/contact1.png'
import contact2 from '../../../images/contact2.png'
import config from '../../../config/config'
import ContactCard from '../../../components/ContactCard'

export default function Contact() {
  const handleRequestClick = () => {
    window.open(
      '/request',
      '_blank',
      'width=600,height=700,left=100,top=100,resizable=no'
    )
  }

  const handleRecruitmentClick = () => {
    window.location.href = `mailto:${config.contactInfo.email}`
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
      <div className='w-full max-w-[1280px] flex flex-col gap-7'>
        <div className='text-white text-[28px]'>
          {config.companyName.en}은 앞선 생각으로 새로운 미래를 창조합니다.
        </div>
        <div className='flex gap-[40px]'>
          <ContactCard
            icon={contact1}
            content='작업 의뢰'
            onClick={handleRequestClick}
          />
          <ContactCard
            icon={contact2}
            content='채용 문의'
            onClick={handleRecruitmentClick}
          />
        </div>
      </div>
    </div>
  )
}
