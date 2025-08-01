
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduce from './pages/introduce/Introduce';
import Quiz from './pages/quiz/Quiz';

const App = () => {
  return (
    <Router>
      <Routes>
        
       <Route path="/" element={<Introduce />} />
<Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
