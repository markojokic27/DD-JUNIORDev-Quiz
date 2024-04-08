import categoriesData from "./categories.json";
import classes from "../index.module.css";
import { useContext } from "react";
import { FormContext } from "../../../formContext";
import translator from "./categoriesTranslator.json";
const CategoryInput = () => {
  const { category, setCategory } = useContext(FormContext);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className={classes.inputContainer}>
      <p>Kategorija:&nbsp;&nbsp;</p>
      <select
        value={category}
        onChange={handleCategoryChange}
        className={classes.input}
      >
        {categoriesData.map((category, index) => (
          <option key={index} value={category}>
            {translator[category]}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CategoryInput;
