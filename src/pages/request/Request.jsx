import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function RequestForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contact: '',
    startDate: '',
    endDate: '',
    requirements: '',
    file: null,
    sendCopy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const confirmSubmit = window.confirm('제출하시겠습니까?')

    if (confirmSubmit) {
      const templateParams = {
        companyName: formData.companyName,
        contact: formData.contact,
        startDate: formData.startDate,
        endDate: formData.endDate,
        requirements: formData.requirements,
        file: formData.file ? formData.file.name : 'No file attached',
      }

      const sendAdminEmail = emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_API_KEYS
      )

      const sendCustomerEmail = formData.sendCopy
        ? emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_CUSTOMER_TEMPLATE_ID,
            { ...templateParams, contact: formData.contact },
            process.env.REACT_APP_EMAILJS_API_KEYS
          )
        : Promise.resolve() // sendCopy가 false일 경우 성공 처리

      Promise.all([sendAdminEmail, sendCustomerEmail])
        .then(() => {
          alert('메일이 성공적으로 발송되었습니다.')
        })
        .catch(() => {
          alert('메일 발송에 실패했습니다.')
        })
    }
  }

  const handleClose = () => {
    const confirmed = window.confirm('정말 창을 닫겠습니까?')
    if (confirmed) {
      window.close()
    }
  }

  return (
    <div className='w-[600px] h-[800px] p-5'>
      <span className='text-[30px] text-[#002970] font-bold'>작업 의뢰</span>
      <form
        className='mt-3 flex flex-col gap-5 border rounded px-5 py-7'
        onSubmit={handleSubmit}
      >
        <div className='flex items-center justify-between gap-2'>
          <span className='text-gray-700'>회사명/고객명</span>
          <input
            className='w-[420px] bg-gray-100 rounded px-2 py-1'
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-gray-700'>회신 이메일</span>
          <input
            className='w-[420px] bg-gray-100 rounded px-2 py-1'
            type='email'
            name='contact'
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <span className='text-gray-700'>예정 기간</span>
          <div className='w-[420px] flex gap-2 items-center justify-between'>
            <div className='flex gap-1 items-center'>
              <span className='text-[0.8rem] text-gray-700'>시작일</span>
              <input
                className='w-[155px] bg-gray-100 rounded px-2 py-1'
                type='date'
                name='startDate'
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <span>~</span>
            <div className='flex gap-1 items-center'>
              <span className='text-[0.8rem] text-gray-700'>종료일</span>
              <input
                className='w-[155px] bg-gray-100 rounded px-2 py-1'
                type='date'
                name='endDate'
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-between gap-2'>
          <span className='text-gray-700'>요구 사항</span>
          <textarea
            className='w-full h-[200px] bg-gray-100 rounded px-3 py-2 text-black resize-none'
            name='requirements'
            value={formData.requirements}
            onChange={handleChange}
          />
        </div>
        <div>
          <span className='mr-2'>도면 첨부</span>
          <input type='file' name='file' onChange={handleFileChange} />
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='checkbox'
            name='sendCopy'
            checked={formData.sendCopy}
            onChange={handleChange}
          />
          <span className='text-gray-700'>제출 내용 메일로 받기</span>
        </div>
      </form>
      <div className='mt-4 flex gap-2'>
        <button
          className='px-4 py-1.5 bg-[#002970] text-white rounded cursor-pointer'
          type='submit'
          onClick={handleSubmit}
        >
          제출
        </button>
        <button
          className='px-4 py-1.5 rounded border cursor-pointer'
          onClick={handleClose}
        >
          닫기
        </button>
      </div>
    </div>
  )
}
