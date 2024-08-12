import React, { useState } from 'react'
import pipeSupport from '../../images/pipesupport.png'
import systemDongbari from '../../images/systemdongbari.png'
import systemBigye from '../../images/systembigye.png'
import ganggwanBigye from '../../images/ganggwanbigye.png'

export default function ItemsVer1() {
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
      className='w-full px-[60px] flex items-center justify-center'
    >
      <div className='w-[1280px] min-w-[620px] flex flex-col justify-center gap-3'>
        <span className='font-bold text-[20px]'>설계 품목 |</span>
        <div className='w-full h-[700px] bg-[#002970] flex justify-between'>
          <img
            src={imageUrl.url}
            className='w-[70%] h-full object-cover'
            alt=''
          />
          <ul className='text-white m-7 flex flex-col gap-5 justify-end'>
            <li
              className={`w-full flex gap-5 items-center justify-end ${imageUrl.name !== 'systemDongbari' ? 'opacity-50' : 'font-bold'}`}
            >
              <span
                onClick={onClick}
                name='systemDongbari'
                className='cursor-pointer'
              >
                시스템동바리
              </span>
              <img
                onClick={onClick}
                name='systemDongbari'
                src={systemDongbari}
                className='w-[145px] h-[100px] object-cover cursor-pointer'
                alt=''
              />
            </li>
            <li
              className={`w-full flex gap-5 items-center justify-end ${imageUrl.name !== 'systemBigye' ? 'opacity-50' : 'font-bold'}`}
            >
              <span
                onClick={onClick}
                name='systemBigye'
                className='cursor-pointer'
              >
                시스템비계
              </span>
              <img
                onClick={onClick}
                name='systemBigye'
                src={systemBigye}
                className='w-[145px] h-[100px] object-cover cursor-pointer'
                alt=''
              />
            </li>
            <li
              className={`w-full flex gap-5 items-center justify-end ${imageUrl.name !== 'pipeSupport' ? 'opacity-50' : 'font-bold'}`}
            >
              <span
                onClick={onClick}
                name='pipeSupport'
                className='cursor-pointer'
              >
                파이프써포트
              </span>
              <img
                onClick={onClick}
                name='pipeSupport'
                src={pipeSupport}
                className='w-[145px] h-[100px] object-cover cursor-pointer'
                alt=''
              />
            </li>
            <li
              className={`w-full flex gap-5 items-center justify-end ${imageUrl.name !== 'ganggwanBigye' ? 'opacity-50' : 'font-bold'}`}
            >
              <span
                onClick={onClick}
                name='ganggwanBigye'
                className='cursor-pointer'
              >
                강관비계
              </span>
              <img
                onClick={onClick}
                name='ganggwanBigye'
                src={ganggwanBigye}
                className='w-[145px] h-[100px] object-cover cursor-pointer'
                alt=''
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
