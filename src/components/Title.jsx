import './title.css'
import questions from '../data.json'
function Title() {
  const length = questions.length
  return (
    <div className = "wrap">
        <h2>Let's Learn Some Data Structure!</h2>
        <h3>Do you know your data structures? Test your knowledge on Data Structure here!</h3>
        <h3>Number of cards: {length} </h3>
        </div>
  )
}

export default Title