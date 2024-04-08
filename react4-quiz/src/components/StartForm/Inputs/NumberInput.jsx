import classes from "../index.module.css";
import { useContext } from "react";
import { FormContext } from "../../../formContext";
const NumberInput = () => {
  const { number, setNumber } = useContext(FormContext);
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div className={classes.inputContainer}>
      <p>Broj pitanja:&nbsp;&nbsp;</p>
      <input
        type="number"
        onKeyDown={(e) => e.preventDefault()}
        min={4}
        max={15}
        onChange={handleNumberChange}
        value={number}
      />
    </div>
  );
};
export default NumberInput;
