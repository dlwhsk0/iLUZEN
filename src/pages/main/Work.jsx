import work from '../../images/work.png'

export default function Work() {
  return (
    <div
      id='업무소개'
      className='w-full p-[60px] flex items-center justify-center bg-gray-100'
    >
      <div className='w-[1280px] min-w-[620px] flex flex-col justify-center gap-3'>
        <span className='font-bold text-[20px]'>업무 소개 |</span>
        <div className='w-full h-[700px] flex justify-center'>
          <img src={work} alt='work' />
        </div>
      </div>
    </div>
  )
}
