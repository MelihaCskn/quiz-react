import React from 'react'
import './Dropdown.css'

const Dropdown = ({data,setDifficultychange}) => {
  return (
    <div className='dropdown'>
      <div className='text'>Zorluk Seviyesi Seçiniz</div>
     <select name="" id="" onChange={(e) => setDifficultychange(e.target.value)}>
  {data.map((dt, i) => (
    <option key={i} value={dt}>{dt}</option>
  ))}
</select>
      </div>
  )
}

export default Dropdown