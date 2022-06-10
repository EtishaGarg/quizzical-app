import React from 'react'
import Options from './Options'
import {nanoid} from "nanoid";

function Quiz({quizzes}) {

  return quizzes.map((quiz, index) => (
    <div className="quiz-questions" key={index}>
        <h2 className="question">{quiz.question}</h2>
        <div className="options">
            <h3 className={quiz.options[0].isHeld ? 'option isHeld':'option'} onClick={()=> quiz.onClick(quiz.id,quiz.options[0].id)}>{quiz.options[0].value}</h3>
            <h3 className={quiz.options[1].isHeld ? 'option isHeld':'option'}>{quiz.options[1].value}</h3>
            <h3 className={quiz.options[2].isHeld ? 'option isHeld':'option'}>{quiz.options[2].value}</h3>
            <h3 className={quiz.options[3].isHeld ? 'option isHeld':'option'}>{quiz.options[3].value}</h3> 
        </div>
    </div>
  ))
}

export default Quiz