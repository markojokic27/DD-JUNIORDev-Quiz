import classes from "../index.module.css";
import { useContext } from "react";
import { FormContext } from "../../../formContext";
const DifficultyInput = () => {
  const { difficulty, setDifficulty } = useContext(FormContext);
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  return (
    <div className={classes.inputContainer}>
      <p>Težina:&nbsp;&nbsp;</p>
      <select
        value={difficulty}
        onChange={handleDifficultyChange}
        className={classes.input}
      >
        <option value="Any Difficulty">Bilo koja</option>
        <option value="Easy">Lako</option>
        <option value="Medium">Srednje</option>
        <option value="Hard">Teško</option>
      </select>
    </div>
  );
};
export default DifficultyInput;
