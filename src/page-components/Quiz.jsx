import React from 'react';
import '../styles/quiz.css';
function Quiz() {
  return (
    <div className="quiz text-center flex flex-col justify-center items-center h-screen ">
      <div className="quiz-container border-4 border-grey w-3/4">
        Quizzzzzzzzzzzz
        <div className="top-component">
          <h1 className="question">Who is the boss ?</h1>
        </div>
        <div className="bottom-component">
          <Options />
        </div>
      </div>
      <div className="result-component">Result</div>
    </div>
  );
}

const Options = () => {
  return (
    <ol>
      <li>answer</li>
      <li>answer</li>
      <li>answer</li>
      <li>answer</li>
    </ol>
  );
};

export default Quiz;
