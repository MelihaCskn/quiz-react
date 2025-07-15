import React from 'react'
import quizdort from '../images/quizdort.jpg';


import Dropdown from '../../components/dropdown/Dropdown';


const Introduce = () => {
  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src={quizdort} alt="Quiz görseli" />
       <Dropdown/>
      </div>
      
      
      </div>
  )
}

export default Introduce