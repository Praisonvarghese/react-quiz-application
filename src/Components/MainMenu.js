import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css";

const MainMenu = () => {

    const { gameState, setGameState,name,setName } = useContext(QuizContext);
    
    const startQuiz = ()=>{
        setGameState("quiz");
    }

    return <div className='Menu'>
        <div>
         <input type="text" name="name" value={name} autoComplete='off'
          onChange={(e) => setName(e.target.value)} placeholder="Enter your Name.."/>
        </div>
        <button onClick={() => startQuiz() }>Start Quiz</button>
    </div>;


};

export default MainMenu;
