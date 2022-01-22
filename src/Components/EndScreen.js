import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css";
import { Questions } from '../Helpers/QuestionBank';


const EndScreen = () => {
 const {score,setScore,setGameState,name,setName} = useContext(QuizContext)
 
 const restartQuiz=()=>{
     setGameState("quiz");
     setScore(0);
 }

 const mainMenu=()=>{
    setGameState("menu");
    setScore(0);
    setName("");
 }

  return <div className='EndScreen' style={
    score > 2
      ? { background: 'rgb(25, 150, 62)' }
      : { background: 'rgb(243, 71, 85)' }           
  } >
      <h1>Quiz Finished</h1>
      <h3>Name : {name.toUpperCase()} </h3>
      <h3>Status :  { score > 2? ("Passed"): ("Failed")}</h3>
      <h3>Your Score is : {score}/{Questions.length}</h3>
      <button onClick={()=>restartQuiz()}>Restart Quiz</button>
      <button onClick={()=>mainMenu()}>Main Menu</button>
  </div>;
};

export default EndScreen;
