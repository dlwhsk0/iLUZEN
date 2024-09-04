import React, { useEffect, useState } from 'react'
import {
  RequestInputText,
  RequestTextarea,
  RequestDate,
  RequestRadioButtons,
} from '../../components/RequestInput'
import { sendEmails } from '../../utils/EmailUtils'
import { initialFormState, validateForm } from '../../utils/RequestForm'

export default function RequestForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({}) // 에러 상태 추가

  useEffect(() => {
    setErrors(validateForm(formData))
  }, [formData])

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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (Object.keys(errors).length === 0) {
      const confirmSubmit = window.confirm('제출하시겠습니까?')

      if (confirmSubmit) {
        sendEmails(formData)
          .then(() => {
            alert('이메일 전송이 완료되었습니다.')
          })
          .catch(() => {
            alert('이메일 전송에 실패했습니다.')
          })
      }
    } else {
      alert('필수 항목을 모두 입력해주세요.')
    }
  }

  // 브라우저 창을 닫으려 할 때 경고 메시지를 표시
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // 사용자에게 경고 메시지를 표시
      const message =
        '변경 사항이 저장되지 않을 수 있습니다. 정말 창을 닫겠습니까?'
      e.preventDefault()
      e.returnValue = message
      return message
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  const handleClose = () => {
    window.close()
  }

  return (
    <div className='w-full h-full px-6 py-10'>
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
          placeholder='회사명을 입력해 주세요.'
        />
        {errors.companyName && (
          <span className='text-red-500 mt-[-5px] text-[14px]'>
            {errors.companyName}
          </span>
        )}
        <RequestInputText
          title='고객명'
          name='customerName'
          value={formData.customerName}
          onChange={handleChange}
          placeholder='고객명을 입력해 주세요.'
        />
        {errors.customerName && (
          <span className='text-red-500 mt-[-5px] text-[14px]'>
            {errors.customerName}
          </span>
        )}
        <RequestInputText
          title='연락처'
          name='contact'
          value={formData.contact}
          onChange={handleChange}
          placeholder='연락처를 입력해주세요. (숫자만 허용, 10~15자)'
        />
        {errors.contact && (
          <span className='text-red-500 mt-[-5px] text-[14px]'>
            {errors.contact}
          </span>
        )}
        <RequestInputText
          title='이메일'
          name='email'
          value={formData.email}
          onChange={handleChange}
          type='email'
          placeholder='이메일 주소를 입력해주세요.'
        />
        {errors.email && (
          <span className='text-red-500 mt-[-5px] text-[14px]'>
            {errors.email}
          </span>
        )}
        <RequestDate
          label='마감 희망일'
          name='dueDate'
          value={formData.dueDate}
          onChange={handleChange}
        />
        {errors.dueDate && (
          <span className='text-red-500 mt-[-10px] text-[14px]'>
            {errors.dueDate}
          </span>
        )}
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

        <div className='w-full border-t' />
        <RequestTextarea
          label='특이사항'
          name='specialNotes'
          value={formData.specialNotes}
          onChange={handleChange}
          placeholder='특이사항이 있을 경우 작성바랍니다.'
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
