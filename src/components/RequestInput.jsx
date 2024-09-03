import React from 'react'
import PropTypes from 'prop-types'

export function RequestInputText({
  title,
  name,
  value,
  onChange,
  type = 'text',
  placeholder = '',
}) {
  return (
    <div className='flex items-center justify-between'>
      <span className='w-[20%] text-gray-700 text-[15px]'>{title}</span>
      <input
        className='w-[80%] bg-gray-100 rounded px-2 py-1'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

RequestInputText.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export function RequestCheckBox({ label, name, checked, onChange }) {
  return (
    <div className='flex items-center'>
      <span className='w-[20%] text-gray-700 text-[15px]'>{label}</span>
      <input
        type='checkbox'
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}

RequestCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export function RequestTextarea({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 4, // 기본 행 수를 4로 설정
}) {
  return (
    <div className='flex flex-col items-start justify-between gap-2'>
      <span className='text-gray-700 text-[15px]'>{label}</span>
      <textarea
        className='w-full bg-gray-100 rounded px-3 py-2 text-black resize-none'
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  )
}

RequestTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
}

export function RequestDate({ label, name, value, onChange }) {
  return (
    <div className='flex items-center'>
      <span className='w-[20%] text-gray-700 text-[15px]'>{label}</span>
      <input
        className='w-[160px] bg-gray-100 rounded px-2 py-1'
        type='date'
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

RequestDate.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export function RequestRadioButtons({ label, name, value, onChange }) {
  return (
    <div className='flex items-center'>
      <span className='w-[25%] text-gray-700 text-[15px]'>{label}</span>
      <div className='w-[75%] flex items-center gap-4'>
        <label>
          <input
            className='mr-1'
            type='radio'
            name={name}
            value={true}
            checked={value === true}
            onChange={onChange}
          />
          예
        </label>
        <label>
          <input
            className='mr-1'
            type='radio'
            name={name}
            value={false}
            checked={value === false}
            onChange={onChange}
          />
          아니요
        </label>
      </div>
    </div>
  )
}

RequestRadioButtons.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}
