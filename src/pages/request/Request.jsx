import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  RequestInputText,
  RequestTextarea,
  RequestDate,
  RequestRadioButtons,
} from '../../components/RequestInput'

export default function RequestForm() {
  const [formData, setFormData] = useState({
    companyName: '', // 회사명
    customerName: '', // 고객명
    contact: '', // 연락처
    email: '', // 이메일
    dueDate: '', // 마감희망일
    structureReview: false, // 구조검토 여부
    attachedDrawing: false, // 도면첨부 여부
    systemDongbari: {
      // 시스템동바리
      installationArea: '', // 설치구간
      type: '', // 타입
      yokeDirection: '', // 멍에방향
      spacing: '', // 이격거리
      lowerRegulation: '', // 하부규정
      structureType: '', // 구조
      insulation: '', // 단열재
      platform: '', // 발판
      eyebrowInstallation: false, // 눈썹보 설치여부
    },
    systemScaffold: {
      // 시스템비계
      installationArea: '', // 설치구간
      type: '', // 타입
      yokeDirection: '', // 멍에방향
      spacing: '', // 이격거리
      lowerRegulation: '', // 하부규정
      structureType: '', // 구조
      insulation: '', // 단열재
      platform: '', // 발판
      eyebrowInstallation: false, // 눈썹보 설치여부
    },
    specialNotes: '', // 특이사항
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const keys = name.split('.')
    if (keys.length === 2) {
      setFormData({
        ...formData,
        [keys[0]]: {
          ...formData[keys[0]],
          [keys[1]]: type === 'radio' ? value === 'true' : value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: type === 'radio' ? value === 'true' : value,
      })
    }
  }

  const sendEmails = (formData) => {
    const templateParams = {
      ...formData,
      structureReview: formData.structureReview ? '예' : '아니요',
      attachedDrawing: formData.attachedDrawing ? '예' : '아니요',
      systemDongbari: {
        ...formData.systemDongbari,
        eyebrowInstallation: formData.systemDongbari.eyebrowInstallation
          ? '예'
          : '아니요',
      },
      systemScaffold: {
        ...formData.systemScaffold,
        eyebrowInstallation: formData.systemScaffold.eyebrowInstallation
          ? '예'
          : '아니요',
      },
    }

    const adminEmailPromise = emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_API_KEYS
    )

    const customerEmailPromise = emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_CUSTOMER_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_API_KEYS
    )

    Promise.all([adminEmailPromise, customerEmailPromise])
      .then((responses) => {
        alert('이메일 전송이 완료되었습니다.')
      })
      .catch((err) => {
        console.error('Failed to send one or more emails:', err)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const confirmSubmit = window.confirm('제출하시겠습니까?')

    if (confirmSubmit) {
      sendEmails(formData)
    }
  }

  const handleClose = () => {
    const confirmed = window.confirm('정말 창을 닫겠습니까?')
    if (confirmed) {
      window.close()
    }
  }

  return (
    <div className='w-full h-full p-5'>
      <span className='text-[30px] text-[#002970] font-bold px-1'>
        작업 의뢰
      </span>
      <form
        className='mt-3 flex flex-col gap-4 border rounded p-5'
        onSubmit={handleSubmit}
      >
        <RequestInputText
          title='회사명'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
          placeholder=''
        />
        <RequestInputText
          title='고객명'
          name='customerName'
          value={formData.customerName}
          onChange={handleChange}
          placeholder=''
        />
        <RequestInputText
          title='연락처'
          name='contact'
          value={formData.contact}
          onChange={handleChange}
          placeholder=''
        />
        <RequestInputText
          title='이메일'
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='email'
          placeholder=''
        />
        <RequestDate
          label='마감 희망일'
          name='dueDate'
          value={formData.dueDate}
          onChange={handleChange}
        />
        <RequestRadioButtons
          label='구조검토 여부'
          name='structureReview'
          value={formData.structureReview}
          onChange={handleChange}
          type='radio'
        />
        <RequestRadioButtons
          label='도면첨부 여부'
          name='attachedDrawing'
          value={formData.attachedDrawing}
          onChange={handleChange}
          type='radio'
        />
        <div className='w-full border-t' />
        <span className='text-gray-700 text-lg font-bold'>시스템동바리</span>
        <RequestInputText
          title='설치구간'
          name='systemDongbari.installationArea'
          value={formData.systemDongbari.installationArea}
          onChange={handleChange}
          placeholder='예: 4.2m 이상/초과, 지하1층, 전기실'
        />
        <RequestInputText
          title='타입'
          name='systemDongbari.type'
          value={formData.systemDongbari.type}
          onChange={handleChange}
          placeholder='예: OK타입, 의조타입'
        />
        <RequestInputText
          title='멍에방향'
          name='systemDongbari.yokeDirection'
          value={formData.systemDongbari.yokeDirection}
          onChange={handleChange}
          placeholder='예: 장방향, 단방향'
        />
        <RequestInputText
          title='이격거리'
          name='systemDongbari.spacing'
          value={formData.systemDongbari.spacing}
          onChange={handleChange}
          placeholder='예: 300~500mm (범위가 150mm 이상 필요)'
        />
        <RequestInputText
          title='하부규정'
          name='systemDongbari.lowerRegulation'
          value={formData.systemDongbari.lowerRegulation}
          onChange={handleChange}
          placeholder='예: P2사용여부, 슬래브x, 보P2 사용'
        />
        <RequestInputText
          title='구조'
          name='systemDongbari.structureType'
          value={formData.systemDongbari.structureType}
          onChange={handleChange}
          placeholder='예: RC, DECK, MAT'
        />
        <RequestInputText
          title='단열재'
          name='systemDongbari.insulation'
          value={formData.systemDongbari.insulation}
          onChange={handleChange}
          placeholder='예: 선시공, 후시공, 없음'
        />
        <RequestInputText
          title='발판'
          name='systemDongbari.platform'
          value={formData.systemDongbari.platform}
          onChange={handleChange}
          placeholder='예: 상단올발판, 벽체테두리발판, 없음'
        />
        <RequestRadioButtons
          label='눈썹보 설치여부'
          name='systemDongbari.eyebrowInstallation'
          value={formData.systemDongbari.eyebrowInstallation}
          onChange={handleChange}
          type='radio'
        />
        <div className='w-full border-t' />
        <span className='text-gray-700 text-lg font-bold'>시스템비계</span>
        <RequestInputText
          title='설치구간'
          name='systemScaffold.installationArea'
          value={formData.systemScaffold.installationArea}
          onChange={handleChange}
          placeholder='예: 4.2m 이상/초과, 지하1층, 전기실'
        />
        <RequestInputText
          title='타입'
          name='systemScaffold.type'
          value={formData.systemScaffold.type}
          onChange={handleChange}
          placeholder='예: OK타입, 의조타입'
        />
        <RequestInputText
          title='멍에방향'
          name='systemScaffold.yokeDirection'
          value={formData.systemScaffold.yokeDirection}
          onChange={handleChange}
          placeholder='예: 장방향, 단방향'
        />
        <RequestInputText
          title='이격거리'
          name='systemScaffold.spacing'
          value={formData.systemScaffold.spacing}
          onChange={handleChange}
          placeholder='예: 300~500mm (범위가 150mm 이상 필요)'
        />
        <RequestInputText
          title='하부규정'
          name='systemScaffold.lowerRegulation'
          value={formData.systemScaffold.lowerRegulation}
          onChange={handleChange}
          placeholder='예: P2사용여부, 슬래브x, 보P2 사용'
        />
        <RequestInputText
          title='구조'
          name='systemScaffold.structureType'
          value={formData.systemScaffold.structureType}
          onChange={handleChange}
          placeholder='예: RC, DECK, MAT'
        />
        <RequestInputText
          title='단열재'
          name='systemScaffold.insulation'
          value={formData.systemScaffold.insulation}
          onChange={handleChange}
          placeholder='예: 선시공, 후시공, 없음'
        />
        <RequestInputText
          title='발판'
          name='systemScaffold.platform'
          value={formData.systemScaffold.platform}
          onChange={handleChange}
          placeholder='예: 상단올발판, 벽체테두리발판, 없음'
        />
        <RequestRadioButtons
          label='눈썹보 설치여부'
          name='systemScaffold.eyebrowInstallation'
          value={formData.systemScaffold.eyebrowInstallation}
          onChange={handleChange}
          type='radio'
        />

        <RequestTextarea
          label='특이사항'
          name='specialNotes'
          value={formData.specialNotes}
          onChange={handleChange}
          placeholder='특이사항 입력'
          rows={4}
        />
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
