import { MouseEvent, useEffect, useState } from "react";
import { fetchData } from "../data/data";
function QuestionList(props:any) {
  const [questionsArr, setQuestionsArr] = useState([]);
  const {onClicked} = props;
  
  useEffect(() => {
    const getData = async () => {
      setQuestionsArr(await fetchData());  
    }
    getData();
  },[]);

  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>Questions:</h1>
      <ul className="list-group">
        {questionsArr.map((question, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={question["id"]}
            onClick={() => {
              onClicked(question["id"], question["A"])
            }}
          >
            {question["Q"]}
          </li>
        ))}
      </ul>
    </>
  );
}

export default QuestionList;
