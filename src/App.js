import React from 'react'
import './App.css';
import Quiz from './components/Quiz';
import {nanoid} from "nanoid";

function App() {

  const [allQuiz, setAllQuiz] = React.useState([])
  const [quizzes, setQuizzzes] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => setAllQuiz(data.results))
  }, [])

  function startQuiz(){
    const quizElements = allQuiz.map(quiz=> {
      return({
        ...quiz,
        id: nanoid(),
        options: [
          { value: quiz.correct_answer },
          { value: quiz.incorrect_answers[0] },
          { value: quiz.incorrect_answers[1] },
          { value: quiz.incorrect_answers[2] }
        ].sort(function(){ return Math.random() - 0.5})
      })
    })
    setQuizzzes(quizElements)
  }

  return (
    <main>
      {
        quizzes.length !== 0
        ?
        <div className="quiz">
          <Quiz quizzes={quizzes}/>
        </div>
        :
        <div className="no-quiz">
          <h1 className='no-quiz-title'>Quizzical App</h1>
          <p className='no-quiz-description'>Some description if needed</p>
          <button className='no-quiz-button' onClick={startQuiz}>Start quiz</button>
        </div>
      }
    </main>
  );
}

export default App;
