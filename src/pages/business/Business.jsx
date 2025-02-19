import icon14 from '../../assets/icons/icon1-4.svg'
import icon2 from '../../assets/icons/icon-2.svg'
import icon3 from '../../assets/icons/icon-3.svg'
import icon5 from '../../assets/icons/icon-5.svg'
import desginBG from '../../assets/designBG.png'

const items = [
  [
    icon14,
    '시스템도면\n일반가설재도면',
    '자재종류구별없이\n일반자재도 도능면화가능',
  ],
  [icon2, '구조검토', '도면부터 구조까지 원스톱'],
  [icon3, '현장상담', '현장과 원활한 소통\n방문을 통한 도면협의까지'],
  [icon5, '맞춤양식제작', '보유자재에 및 도면양식제작'],
]

export default function Business() {
  return (
    <div className='w-[1000px] h-full mx-auto'>
      <div className='text-[25px] mb-[60px] font-light'>사업분야</div>
      {/*<div className='w-full h-[480px] mx-auto grid grid-cols-2 grid-rows-2 gap-[20px]'>*/}
      {/*  {items.map((item, index) => (*/}
      {/*    <div*/}
      {/*      key={index}*/}
      {/*      className='w-full h-full p-[15px] bg-[#264666] flex justify-center items-center rounded-lg relative'*/}
      {/*    >*/}
      {/*      /!*<div className='w-full h-full flex justify-center items-center gap-[60px] rounded-lg border border-white'>*!/*/}
      {/*      /!*  <img src={item[0]} alt='icon' className='w-[100px] h-[100px]' />*!/*/}
      {/*      /!*  <div className='flex flex-col justify-center break-keep gap-2 text-white tracking-widest whitespace-pre-line'>*!/*/}
      {/*      /!*    <span className='text-[20px] font-bold'>{item[1]}</span>*!/*/}
      {/*      /!*    <span>{item[2]}</span>*!/*/}
      {/*      /!*  </div>*!/*/}
      {/*      /!*</div>*!/*/}
      {/*      <div className='w-full h-full flex justify-center items-center gap-[60px] rounded-lg border border-white'>*/}
      {/*        <img src={item[0]} alt='icon' className='w-[100px] h-[100px]' />*/}
      {/*        <div className='flex flex-col justify-center break-keep gap-2 text-white tracking-widest whitespace-pre-line'>*/}
      {/*          <span className='text-[20px] font-bold'>{item[1]}</span>*/}
      {/*          <span>{item[2]}</span>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <img*/}
      {/*        src={desginBG}*/}
      {/*        alt='배경'*/}
      {/*        className='w-full h-full object-cover rounded-lg absolute inset-0'*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className='w-full h-[480px] mx-auto grid grid-cols-2 grid-rows-2 gap-[20px]'>
        {items.map((item, index) => (
          <div
            key={index}
            className='w-full h-full p-[15px] bg-[#264666] flex justify-center items-center rounded-lg relative overflow-hidden'
          >
            {/* 배경 이미지 (가장 아래 배치) */}
            <img
              src={desginBG}
              alt='배경'
              className='w-full h-full object-cover rounded-lg absolute inset-0 z-0'
            />

            {/* 내용 영역 (배경보다 위에 오도록 z-10 적용) */}
            <div className='w-full h-full flex justify-center items-center gap-[60px] rounded-lg border border-white relative z-10'>
              <div
                className='w-[100px] h-[100px] bg-white'
                style={{
                  WebkitMask: `url(${item[0]}) no-repeat center / contain`,
                }}
              />
              <div className='flex flex-col justify-center break-keep gap-2 text-white tracking-widest whitespace-pre-line'>
                <span className='text-[20px] font-bold'>{item[1]}</span>
                <span>{item[2]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
