export default function ContactCard({ icon, content, onClick }) {
  return (
    <div
      className='w-full sm:w-[80%] max-w-[350px] h-[60px] sm:h-[90px] flex items-center justify-center border border-black bg-white cursor-pointer'
      onClick={onClick}
    >
      <div className='w-[80%] sm:w-[70%]'>
        <div className='w-full max-w-[120px] flex items-center'>
          <img
            src={icon}
            className='h-[20%] max-h-[35px] object-contain mr-4 sm:mr-5'
            alt=''
          />
          <span className='text-[16px] sm:text-[20px] whitespace-nowrap'>
            {content}
          </span>
        </div>
      </div>
    </div>
  )
}
