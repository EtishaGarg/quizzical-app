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

  function clickedOption(id,optionId) {
  //   setQuizzzes(prevQuiz => prevQuiz.map(quiz => {
  //     return quiz.id===id ? 
  //       {...quiz, isHeld : !quiz.isHeld}
  //       :
  //       quiz
  //   }))
  }

  function startQuiz(){
    const quizElements = allQuiz.map(quiz=> {
      return({
        ...quiz,
        id: nanoid(),
        options: [
          { id: nanoid(), value: quiz.correct_answer, isHeld: false, onClick:{clickedOption} },
          { id: nanoid(), value: quiz.incorrect_answers[0], isHeld: false, onClick:{clickedOption} },
          { id: nanoid(), value: quiz.incorrect_answers[1], isHeld: false, onClick:{clickedOption} },
          { id: nanoid(), value: quiz.incorrect_answers[2], isHeld: false, onClick:{clickedOption} }
        ]
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
          <button className="button">Check Answers</button>
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
