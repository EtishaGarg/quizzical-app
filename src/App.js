import React from 'react'
import './App.css';

function App() {

  function startQuiz() {

  }
  
  return (
    <main>
      <div className="no-quiz">
        <h1 className='no-quiz-title'>Quizzical App</h1>
        <p className='no-quiz-description'>Some description if needed</p>
        <button className='no-quiz-button' onClick={startQuiz}>Start quiz</button>
      </div>
    </main>
  );
}

export default App;
