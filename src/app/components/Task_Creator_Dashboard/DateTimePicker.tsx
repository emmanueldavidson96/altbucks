"use client"
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DateTimePickerProps {
  selected: Date | null
  onChange: (date: Date | null) => void
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="MM/dd/yyyy h:mm aa"
      className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm"
      placeholderText="Select date and time"
    />
  )
}

export default DateTimePicker
