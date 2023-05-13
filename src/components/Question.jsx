import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import correct from '../assets/correct.mp3';
import wrong from '../assets/wrong.mp3';

export const Question = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  
  const [playCorrect] = useSound(correct);
  const [playWrong] = useSound(wrong);


  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName('answer active');

    if (a.isCorrect) {
      playCorrect(); // Play correct sound
      setClassName('answer correct');
    } else {
      playWrong(); // Play wrong sound
      setClassName('answer wrong');
      
      delay(3500,()=>{
            
        setStop(true);
    })

    }

    delay(5000, () => {
      if (a.isCorrect) {

        delay(1500,()=>{
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
        })
   
      }

      else{
     
        delay(1000,()=>{
            
            setStop(true);
        })

      }
    });
  };

  return (
    <div className='question_container'>
      <div className='question'>{question?.question}</div>

      <div className='answers '>
        {question?.answers.map((a, index) => (
          <div
            key={index}
            className={selectedAnswer === a ? className : 'answer'}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};
