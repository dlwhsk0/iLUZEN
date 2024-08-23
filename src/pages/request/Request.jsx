export default function Request() {
  return (
    <div>
      <div>
        <span className='text-[30px] text-[#002970]'>연락처</span>
      </div>
      <div>
        <div className='flex gap-5'>
          <div>
            <span>회사 명/고객 명</span>
            <input className='w-[200px]' type='text' />
          </div>
          <div>
            <span>연락처</span>
            <input className='w-[200px]' type='text' />
          </div>
        </div>
        <div>
          <span>시공 기간</span>
        </div>
        <div>
          <span>요구 사항</span>
        </div>
        <div>
          <span>도면 첨부</span>
        </div>
      </div>
    </div>
  )
}
