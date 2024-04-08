import { useContext, useState } from "react";
import classes from "./index.module.css";
import { FormContext } from "../../formContext";

function QuestionForm(props) {
  const { number, setStartClicked, setCategory, setNumber, setDifficulty  } = useContext(FormContext);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [incorrectIndex, setIncorrectIndex] = useState(null);

  function answerClicked(answer, indexAnswer) {
    if (answer === props.correctAnswer) {
      setCorrectIndex(indexAnswer);
      props.setScore((prevScore) => prevScore + 1);
    } else {
      setCorrectIndex(props.answers.indexOf(props.correctAnswer));
      setIncorrectIndex(indexAnswer);
    }
    if (number == props.currentQuestion) {
      props.setEnd(true);
    }
  }
  function nextQuestion() {
    setCorrectIndex(null);
    setIncorrectIndex(null);
    props.setCurrentQuestion(props.currentQuestion + 1);
  }
  function reset() {
    props.setScore(0);
    props.setEnd(false);
    setStartClicked(false);
    setCorrectIndex(null);
    setIncorrectIndex(null);
    props.setCurrentQuestion(1);
    setCategory("Any Category");
    setNumber(4);
    setDifficulty("Any Difficulty");
  }

  return (
    <div className={classes.questionForm}>
      <div className={classes.questionForm__question}>
        <p dangerouslySetInnerHTML={{ __html: props.question }} />
      </div>
      <div className={classes.questionForm__wrapper}>
        {props.answers.map((answer, index) => (
          <div key={index} className={classes.questionForm__answer}>
            <button
              disabled={correctIndex !== null || incorrectIndex !== null}
              dangerouslySetInnerHTML={{ __html: answer }}
              onClick={() => answerClicked(answer, index)}
              className={`${classes.questionForm__button} 
              ${index === correctIndex ? classes.green : ""}
              ${index === incorrectIndex ? classes.red : ""}
              ${
                correctIndex !== null || incorrectIndex !== null
                  ? classes.disabled
                  : ""
              }`}
            ></button>
          </div>
        ))}
      </div>
      <div className={`${classes.questionForm__container}`}>
        <button
          className={`${
            (correctIndex === null && incorrectIndex === null) ||
            number == props.currentQuestion
              ? classes.displayNone
              : classes.questionForm__buttonNext
          }`}
          onClick={() => {
            nextQuestion();
          }}
        >
          Sljedeće pitanje
        </button>
        <button
          className={`${
            props.end === false
              ? classes.displayNone
              : classes.questionForm__buttonReset
          }`}
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default QuestionForm;
