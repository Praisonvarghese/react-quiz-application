import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const {score,setScore,setGameState,name} = useContext(QuizContext)
  
  const nextQuestion=()=>{
        if(Questions[currentQuestion].answer===optionChosen){
            setScore(score+1);
        }
        setCurrentQuestion(currentQuestion+1);
        setOptionChosen("");
  }

  const finishQuiz=()=>{
    if(Questions[currentQuestion].answer===optionChosen){
        setScore(score+1);
    }
    setGameState("endScreen");

  }

  const selectedOption=(param)=>{
      if(param === optionChosen){
         setOptionChosen("")
      } else {
        setOptionChosen(param)
      }
    
  }

  return <div className='Quiz'>
       <div> Name :  {name}</div>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div>
          <button  style={
                  optionChosen === "A"
                    ? { background: 'orange' }
                    : { background: '' }           
                } key="A" onClick={()=>selectedOption("A")}>{Questions[currentQuestion].optionA}</button>

          <button style={
                  optionChosen === "B"
                    ? { background: 'orange' }
                    : { background: '' }           
                }  key="B" onClick={()=>selectedOption("B")}>{Questions[currentQuestion].optionB}</button>

          <button style={
                  optionChosen === "C"
                    ? { background: 'orange' }
                    : { background: '' }           
                } key="C" onClick={()=>selectedOption("C")}>{Questions[currentQuestion].optionC}</button>

          <button style={
                  optionChosen === "D"
                    ? { background: 'orange' }
                    : { background: '' }           
                } key="D" onClick={()=>selectedOption("D")}>{Questions[currentQuestion].optionD}</button>
      </div>
      <br/>
      {currentQuestion === Questions.length-1 ?(
          <button className='quizbutton' onClick={()=>finishQuiz()}>Finish Quiz</button>
      ):(
        <button className='quizbutton' onClick={()=>nextQuestion()}>Next Question</button>
      )} 
     <br/>
      <div>Question {currentQuestion+1} / {Questions.length}</div>
  </div>;
};

export default Quiz;
