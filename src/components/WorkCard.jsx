export default function WorkCard({ content, icon }) {
  return (
    <div className='w-full h-[65px] border-2 bg-white flex items-center justify-center relative'>
      <img
        className='w-[60px] absolute top-[-30px] left-[-35px]'
        src={icon}
        alt=''
      />
      <span>{content}</span>
    </div>
  )
}
