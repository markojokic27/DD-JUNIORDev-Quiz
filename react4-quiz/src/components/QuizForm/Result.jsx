import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../formContext";
import classes from "./index.module.css";

function Result(props) {
  const { number } = useContext(FormContext);

  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    if (props.end === true)
      setPercentage(Math.round((props.score / number) * 100) + "%");
  }, [props.score, number, props.end]);

  return (
    <div className={classes.result}>
      <div className={classes.result__container}>
        <h3>Pitanje:</h3>
        <p>
          {props.currentQuestion}/{number}
        </p>
      </div>
      <div className={classes.result__container}>
        <h3>Tocni odgovori:</h3>
        <p>{props.score}</p>
      </div>
      <div
        className={`${classes.result__container} ${
          props.end === true
            ? classes.result__percentage
            : classes.displayInvisible
        }`}
      >
        <h3>Rezultat:</h3>
        <p>{percentage}</p>
      </div>
    </div>
  );
}
export default Result;
