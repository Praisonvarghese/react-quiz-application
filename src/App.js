import { useContext, useState } from 'react';
import './App.css';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helpers/Contexts';


function App() {
  
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name,setName] = useState("");
  
  return (
    <div className="App">
     <h1>QUIZ APP</h1>
     <QuizContext.Provider value={{ gameState,setGameState ,score,setScore,name,setName}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
