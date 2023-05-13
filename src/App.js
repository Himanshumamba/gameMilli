import { useState,useEffect, useMemo } from "react";
import "./assets/app.css"
import { Question } from "./components/Question";
import { Timer } from "./components/Timer";
import Start from "./components/Start";
function App() {
const [questionNumber ,setQuestionNumber ]=useState(1);
const [earned ,SetEarned]= useState("₹ 0")
 const [stop ,setStop]= useState(false);
const[userName,setUserName]=useState(null)
 const data = [
  {
    id: 1,
    question: 'What is the capital of Australia?',
    answers: [
      { text: 'Sydney', isCorrect: false },
      { text: 'Melbourne', isCorrect: false },
      { text: 'Canberra', isCorrect: true },
      { text: 'Perth', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: 'Who wrote the novel "Pride and Prejudice"?',
    answers: [
      { text: 'Charles Dickens', isCorrect: false   },
      { text: 'William Shakespeare', isCorrect: false },
      { text: 'Jane Austen', isCorrect: true},
      { text: 'Mark Twain', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: 'What is the largest planet in our solar system?',
    answers: [
      {text: 'Earth', isCorrect: false  },
      { text: 'Saturn', isCorrect: false },
      { text: 'Mars', isCorrect: false },
      { text: 'Jupiter', isCorrect: true }
    ]
  },
  {
    id: 4,
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Leonardo da Vinci', isCorrect: true },
      { text: 'Pablo Picasso', isCorrect: false },
      { text: 'Vincent van Gogh', isCorrect: false },
      { text: 'Claude Monet', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: 'What is the chemical symbol for gold?',
    answers: [
      {text: 'Fe', isCorrect: false },
      { text: 'Ag', isCorrect: false },
      { text: 'Cu', isCorrect: false },
      { text: 'Au', isCorrect: true  }
    ]
  },
  {
    id: 6,
    question: 'Who is the current Prime Minister of Canada?',
    answers: [
      {text: 'Jean Chrétien', isCorrect: false },
      { text: 'Stephen Harper', isCorrect: false },
      { text: 'Justin Trudeau', isCorrect: true  },
      { text: 'Brian Mulroney', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: 'What is the largest ocean on Earth?',
    answers: [
      { text: 'Pacific Ocean', isCorrect: true },
      { text: 'Atlantic Ocean', isCorrect: false },
      { text: 'Indian Ocean', isCorrect: false },
      { text: 'Arctic Ocean', isCorrect: false }
    ]
  }
];
//code optmisation
// const moneyPyramid = [
//   { id: 1, amount: '₹10,000' },
//   { id: 2, amount: '₹20,000' },
//   { id: 3, amount: '₹30,000' },
//   { id: 4, amount: '₹40,000' },
//   { id: 5, amount: '₹50,000' },
//   { id: 6, amount: '₹60,000' },
//   { id: 7, amount: '₹70,000' },
//   { id: 8, amount: '₹80,000' },
//   { id: 9, amount: '₹90,000' },
//   { id: 10, amount: '₹1,00,000' },
//   { id: 11, amount: '₹2,00,000' },
//   { id: 12, amount: '₹5,00,000' },
//   { id: 13, amount: '₹10,00,000' },
//   { id: 14, amount: '₹50,00,000' },
//   { id: 15, amount: '₹1,00,00,000' }
// ].reverse();

  const moneyPyramid = useMemo (()=>
    [
      { id: 1, amount: '₹10,000' },
      { id: 2, amount: '₹20,000' },
      { id: 3, amount: '₹30,000' },
      { id: 4, amount: '₹40,000' },
      { id: 5, amount: '₹50,000' },
      { id: 6, amount: '₹60,000' },
      { id: 7, amount: '₹70,000' },
      { id: 8, amount: '₹80,000' },
      { id: 9, amount: '₹90,000' },
      { id: 10, amount: '₹1,00,000' },
      { id: 11, amount: '₹2,00,000' },
      { id: 12, amount: '₹5,00,000' },
      { id: 13, amount: '₹10,00,000' },
      { id: 14, amount: '₹50,00,000' },
      { id: 15, amount: '₹1,00,00,000' }
    ].reverse(),
  
  []) ;


  useEffect(() => {
    if (questionNumber > 1) {
      const foundAmount = moneyPyramid.find((m) => m.id === questionNumber - 1)?.amount;
      if (foundAmount) {
        SetEarned(foundAmount);
      }
    }
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="App">
      {userName? (<> <div className="main">
        {stop?(<h1 className="earned"> You have earned {earned} better luck Next Time </h1>):(
        <>
        <div className="top">
          <div className="timer"><Timer setStop ={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
          <Question
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
        </>
       ) }
      </div>
      
      <div className="pyramid">
        <div className="moneyList">
          <ul>
            {moneyPyramid.map((m) => (
              <li
                key={m.id}
                className={
                  questionNumber === m.id ? "moneyListItem active" : "moneyListItem"
                }
              >
                <span className="moneyListNumber">{m.id}</span>
                <span className="moneyListAmount">{m.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div></>) : <Start setUserName ={setUserName}/>}
     
  
    </div>
  );
}

export default App;
