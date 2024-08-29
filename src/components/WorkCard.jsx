export default function WorkCard({ content, icon }) {
  return (
    <div className='w-full px-5 py-4 border-2 bg-white flex items-center justify-center relative '>
      <img
        className='w-[40px] sm:w-[55px] absolute top-[-20px] left-[-25px] sm:top-[-20px] sm:left-[-30px]'
        src={icon}
        alt=''
      />
      <span className='text-center'>{content}</span>
    </div>
  )
}
