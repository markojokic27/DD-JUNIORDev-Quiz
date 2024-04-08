import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../formContext";
import classes from "./index.module.css";
import QuestionForm from "./QuestionForm";
import Result from "./Result";

function QuizForm() {
  const { startClicked } = useContext(FormContext);
  const { questions } = useContext(FormContext);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    if (currentQuestion <= questions.length && questions.length > 0) {
      setQuestion(questions[currentQuestion - 1].question);
      setCorrectAnswer(questions[currentQuestion - 1].correct_answer);
      setAnswers(
        [
          ...questions[currentQuestion - 1].incorrect_answers,
          questions[currentQuestion - 1].correct_answer,
        ].sort(() => Math.random() - 0.5)
      );
    }
  }, [questions, currentQuestion]);

  return (
    <div
      className={`${classes.quizForm} ${
        !startClicked ? classes.displayNone : ""
      }`}
    >
      <QuestionForm
        question={question}
        correctAnswer={correctAnswer}
        answers={answers}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        setScore={setScore}
        setEnd={setEnd}
        end={end}
      />
      <Result currentQuestion={currentQuestion} score={score} end={end} />
    </div>
  );
}
export default QuizForm;
