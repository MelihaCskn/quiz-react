import React from 'react';
import '../pages/quiz/Quiz.css';

const QuizCard = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  currentIndex,
  totalQuestions,
}) => {
  return (
    <div className="quiz-container">
      <div className="quiz-info">
    
      </div>

      {/* Sorunun başında numaralandırma */}
      <h3>{`${currentIndex + 1}/ ${totalQuestions} - ${question.question}`}</h3>

      <ul className="answers">
        {question.answers.map((a, i) => {
          let bg = '';
          if (selectedAnswer) {
            if (a === question.correct_answer) bg = 'green';
            else if (a === selectedAnswer && a !== question.correct_answer) bg = 'red';
          }
          return (
            <li
              key={i}
              className={`answer ${bg}`}
              onClick={() => onAnswerSelect(a)}
            >
              {a}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizCard;
