import { useState } from 'react';
import questions from '../data.json'; // Import the questions data
import './card.css';

function Card() {
  const [flipped, setFlipped] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(Math.floor(Math.random() * questions.length));

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleNextQuestion = () => {
    setFlipped(false); // Reset flip state
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length)); // Pick a new random question
  };

  return (
    <div className='container'>
      <div className="flip-card" onClick= {handleClick}>
        <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
          <div className="flip-card-front">
            <h3>{questions[currentQuestionIndex].question}</h3>
          </div>
          <div className="flip-card-back">
            <h3>{questions[currentQuestionIndex].answer}</h3>
          </div>
        </div>
      </div>
      <div className='button-div'>
        <button className="next-button" onClick={handleNextQuestion}>Next Question ➡️</button>
      </div>
    </div>
  );
}

export default Card;
