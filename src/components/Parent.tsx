import { useEffect, useState } from "react";
import QuestionList from "./QuestionList";
function Parent() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerId, setAnswerId] = useState(1);
  const [answer, setAnswer] = useState('');
  
  const clicked = (id: number, answer: string) => {
    console.log("lai bhari");
    setShowAnswer(true);
    setAnswerId(id);
    setAnswer(answer);
  };

  return (
    <div>
      {showAnswer ? <p>{`Answer ${answerId}: \n ${answer}`}</p> : <QuestionList onClicked={clicked}></QuestionList>}
    </div>
  );
}

export default Parent;
