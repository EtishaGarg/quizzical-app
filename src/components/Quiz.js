import React from "react";

function Quiz({ quizzes, resetGame}) {

  const [selectedOption, setSelectedOption] = React.useState([]);
  const [score, setScore] = React.useState(0)
  const [response, setResponse] = React.useState(0)
  const [isClicked, setIsClicked] = React.useState(false)

  
  function clickedOption(event, id, value){
    event.target.className= "option isHeld"
    const newSelection = {
      id: id,
      optionSelected: value
    }
    setSelectedOption(prevSelection => [...prevSelection,newSelection])
    setResponse(prevResponse => prevResponse + 1)
  }
//   console.log(selectedOption)

  function checkAnswer(){
    let count=0
    for(let i=0; i<quizzes.length; i++){
        for(let j=0; j<selectedOption.length; j++){
            if((quizzes[i].id === selectedOption[j].id) && (quizzes[i].correct_answer === selectedOption[j].optionSelected)){
                count = count+1
                setScore(count)
            }
        }
    }
    setIsClicked(true)
  }
  console.log(score)

  return(
      <div>
          {
              quizzes.map((quiz, index) => (
                <div className="quiz-questions" key={index}>
                  <h2 className="question">{quiz.question}</h2><div className="options">
                    <div
                      className="option"
                      onClick={(e)=>{clickedOption(e,quiz.id,quiz.options[0].value)}}
                    >
                      {quiz.options[0].value}
                    </div>
                    <div
                      className="option"
                      onClick={(e)=>{clickedOption(e,quiz.id,quiz.options[1].value)}}
                    >
                      {quiz.options[1].value}
                    </div>
                    <div
                      className="option"
                      onClick={(e)=>{clickedOption(e,quiz.id,quiz.options[2].value)}}
                    >
                      {quiz.options[2].value}
                    </div>
                    <div
                      className="option"
                      onClick={(e)=>{clickedOption(e,quiz.id,quiz.options[3].value)}}
                    >
                      {quiz.options[3].value}
                    </div>
                  </div>
                </div>
              ))
          }
          {response === quizzes.length && isClicked===true
          ?
          <div className="resetGame">
            <h3 className="score">You scored {score}/{quizzes.length} correct answers</h3>
            <button className="resetButton" onClick={resetGame}>Play Again</button>
          </div>
          :
          <button className="checkAnswersButton" onClick={checkAnswer}>Check Answers</button>
          }
      </div>
  )
}

export default Quiz;