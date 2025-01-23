import company from '../../images/company.jpg'

export default function Company() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img
        src={company}
        alt='thumbnail'
        className='w-full h-[400px] object-cover mb-[100px]'
      />
      <div className='w-[1280px] h-screen'>
        <div className='text-[25px] mb-[30px] font-light'>회사개요</div>
      </div>
    </div>
  )
}
