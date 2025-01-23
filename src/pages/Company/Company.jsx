import company from '../../images/company.jpg'

export default function Company() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <img
        src={company}
        alt='thumbnail'
        className='w-full h-[400px] object-cover mb-[60px]'
      />
      <div className='w-[1280px] h-[300px]'>
        <div className='text-[25px] mb-[30px]'>회사개요</div>
      </div>
    </div>
  )
}
