import pipeSupport from '../../images/pipesupport.png'
import React, { useState } from 'react'
import systemDongbari from '../../images/systemdongbari.png'
import systemBigye from '../../images/systembigye.png'
import ganggwanBigye from '../../images/ganggwanbigye.png'

export default function ItemsVer2() {
  const init = { url: pipeSupport, name: 'pipeSupport' }
  const [imageUrl, setImageUrl] = useState(init)
  const onClick = (e) => {
    const newName = e.target.getAttribute('name')
    const newUrl = {
      systemDongbari,
      systemBigye,
      pipeSupport,
      ganggwanBigye,
    }[newName]
    setImageUrl({ url: newUrl, name: newName })
  }

  return (
    <div
      id='설계품목'
      className='w-full flex flex-col items-center justify-center'
    >
      <div className='w-full min-w-[620px] h-[85px] bg-[#002970] flex items-center justify-center'>
        <div className='w-[1000px] text-white flex justify-between'>
          <span
            onClick={onClick}
            name='systemDongbari'
            className={`cursor-pointer ${imageUrl.name !== 'systemDongbari' ? 'opacity-50' : 'font-bold'}`}
          >
            시스템동바리
          </span>
          <span
            onClick={onClick}
            name='systemBigye'
            className={`cursor-pointer ${imageUrl.name !== 'systemBigye' ? 'opacity-50' : 'font-bold'}`}
          >
            시스템비계
          </span>
          <span
            onClick={onClick}
            name='pipeSupport'
            className={`cursor-pointer ${imageUrl.name !== 'pipeSupport' ? 'opacity-50' : 'font-bold'}`}
          >
            파이프써포트
          </span>
          <span
            onClick={onClick}
            name='ganggwanBigye'
            className={`cursor-pointer ${imageUrl.name !== 'ganggwanBigye' ? 'opacity-50' : 'font-bold'}`}
          >
            강관비계
          </span>
        </div>
      </div>
      <div className='w-full min-w-[620px] h-[800px] bg-black flex items-center justify-center'>
        <img src={imageUrl.url} className='h-full object-cover' alt='' />
      </div>
    </div>
  )
}
