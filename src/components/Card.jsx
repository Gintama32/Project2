import { useState } from 'react'; 
import questions from '../data.json'; // Import the questions data
import './card.css';

function Card() {
  const initialIndex = Math.floor(Math.random() * questions.length);
  const [flipped, setFlipped] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialIndex);
  const [stack, setStack] = useState([initialIndex]); // Initialize stack as state
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null); // State to track answer correctness

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleNextQuestion = () => {
    setFlipped(false); // Reset flip state
    const index = Math.floor(Math.random() * questions.length);
    setStack(prevStack => [...prevStack, index]); // Update stack state
    setCurrentQuestionIndex(index); // Pick a new random question
    setAnswer(''); // Reset the answer input
    setIsCorrect(null); // Reset correctness state
  };

  const handlePrevQuestion = () => {
    setFlipped(false);
    if (stack.length > 1) { // Ensure there is a previous question
      const newStack = [...stack];
      newStack.pop(); // Remove the current index
      const prevIndex = newStack[newStack.length - 1]; // Get the last index
      setStack(newStack);
      setCurrentQuestionIndex(prevIndex); // Set previous question index
      setAnswer(''); // Reset the answer input
      setIsCorrect(null); // Reset correctness state
    }
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
      setIsCorrect(true); // Answer is correct
    } else {
      setIsCorrect(false); // Answer is incorrect
    }
  };

  // Apply conditional class to input based on correctness
  const inputClass = isCorrect === null ? '' : isCorrect ? 'correct' : 'wrong';

  return (
    <div className='container'>
      <div className="flip-card" onClick={handleClick}>
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
        <button onClick={handlePrevQuestion} disabled={stack.length <= 1}>Previous Question ⏮️</button>
        <input 
          className={inputClass} // Apply conditional class
          onChange={handleAnswerChange} 
          value={answer} 
          placeholder='Enter your answer' 
        />
        <button className="next-button" onClick={handleNextQuestion}>Next Question ➡️</button>
      </div>
      <button type='button' onClick={checkAnswer}>Submit</button>
    </div>
  );
}

export default Card;
