export default function ContactCard({ icon, content, onClick }) {
  return (
    <div
      className='w-[350px] h-[90px] text-[20px] flex items-center border border-black bg-white cursor-pointer'
      onClick={onClick}
    >
      <img
        src={icon}
        className='h-[35px] object-contain ml-[50px] mr-4'
        alt=''
      />
      <span>{content}</span>
    </div>
  )
}
