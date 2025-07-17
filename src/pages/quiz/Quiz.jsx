import './Quiz.css';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestions } from '../../api/Api';
import QuizCard from '../../components/QuizCard';
import kupa from '../images/kupa.jpg';

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState(60);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setTimer(30);
    setSelectedAnswer(null);
  }, [currentIndex]);

  useEffect(() => {
    if (quizFinished) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          handleNext(true); // Süre bitti, boş say
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [quizFinished]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestions(difficulty, amount);
      setQuestions(data);
    };
    fetchData();
  }, [difficulty, amount]);

  const handleAnswer = (answer) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setTimeout(() => {
      handleNext(false, answer);
    }, 1000);
  };

  const handleNext = (noAnswer = false, answer = null) => {
    setResults((prevResults) => {
      if (noAnswer || answer === null) {
        return [...prevResults, 'empty'];
      }
      const isCorrect = answer === questions[currentIndex].correct_answer;
      return [...prevResults, isCorrect ? 'correct' : 'wrong'];
    });

    setSelectedAnswer(null);

    if (currentIndex + 1 >= questions.length) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (questions.length === 0) return <div>Yükleniyor...</div>;

if (quizFinished) {
  const correct = results.filter((r) => r === 'correct').length;
  const total = questions.length;
  const successRate = Math.round((correct / total) * 100);

  return (
    <div className="quiz">
      <div className="quiz-container result-container">
        <h2 className="result-title">Quiz Sonucu</h2>
        <div className="result-stats">
          <div className="stat-box">
            <p className="stat-label">Toplam Soru</p>
            <p className="stat-value">{total}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Doğru</p>
            <p className="stat-value correct">{correct}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Başarı Oranı</p>
            <p className="stat-value success-rate">%{successRate}</p>
          </div>
        </div>
        <img src={kupa} alt="Kupa" className="quiz-kupa" />
        <button className="btn-restart" onClick={() => navigate('/')}>Başa Dön</button>
      </div>
    </div>
  );
}


  return (
    <>
      <div className={`timer-fixed ${timer <= 10 ? 'low' : ''}`}>
        Kalan Süre: {timer} saniye
      </div>
      <div className="quiz">
        <QuizCard
          question={questions[currentIndex]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswer}
          timer={timer}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
      </div>
    </>
  );
};

export default Quiz;
