"use client"
import React from 'react'
import Select from 'react-select'

const countryOptions = [
  { value: 'NG', label: 'Nigeria' },
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  // Add more countries as needed
]

interface CountrySelectProps {
  value?: { value: string; label: string }
  onChange: (value: { value: string; label: string }) => void
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  return (
    <Select
      placeholder="Select country"
      options={countryOptions}
      value={value}
      onChange={(newValue) => onChange(newValue as { value: string; label: string })}
      styles={{
        control: (base) => ({
          ...base,
          border: '1px solid #D1D5DB',
          borderRadius: '0.375rem',
          padding: '0.25rem',
          fontSize: '0.875rem'
        })
      }}
    />
  )
}

export default CountrySelect
