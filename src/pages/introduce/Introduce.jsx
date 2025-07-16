import React, { useState } from 'react'
import quizdort from '../images/quizdort.jpg';
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';



const Introduce = () => {
const difficulty = ["easy", "medium", "hard"];
const [difficultychange, setDifficultychange] = useState("easy");

const navigate=useNavigate();
const total_question=5;

function startQuiz(){
  if(difficultychange){
   navigate(`/quiz/${difficultychange}/${total_question}`);


  }
}

  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src={quizdort} alt="Quiz görseli" />
      <Dropdown data={difficulty} setDifficultychange={setDifficultychange} />                          
       <div onClick={startQuiz}className='introduce-btn'>Quiz'e Başla</div>
      </div>
      
      
      </div>
     
  )
}

export default Introduce