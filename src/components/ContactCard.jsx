export default function ContactCard({ icon, content, onClick }) {
  return (
    <div
      className='w-full sm:w-[80%] max-w-[350px] h-[60px] sm:h-[90px] text-[20px] flex items-center justify-center border border-black bg-white cursor-pointer'
      onClick={onClick}
    >
      <div className='w-[80%]'>
        <div className='w-full max-w-[120px] sm:w-[70%] flex items-center justify-between'>
          <img
            src={icon}
            className='h-[20%] max-h-[35px] object-contain'
            alt=''
          />
          <span>{content}</span>
        </div>
      </div>
    </div>
  )
}
