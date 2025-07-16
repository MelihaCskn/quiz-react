import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { difficulty, amount } = useParams(); // URL parametreleri
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/questions/${difficulty}/${amount}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [difficulty, amount]);

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div>
      <h2>{difficulty} zorluk seviyesindeki sorular</h2>
      <ul>
        {questions.map(q => (
          <li key={q.id}>
            <strong>{q.question}</strong>
            <ul>
              {q.answers.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
