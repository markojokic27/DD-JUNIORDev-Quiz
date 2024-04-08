import { useContext } from "react";
import { FormContext } from "../../formContext";
import CategoryInput from "./Inputs/CategoryInput";
import DifficultyInput from "./Inputs/DifficultyInput";
import NumberInput from "./Inputs/NumberInput";
import classes from "./index.module.css";
import categoriesJSON from "../../assets/categories.json";
import axios from "axios";
function StartForm() {
  const {
    category,
    difficulty,
    number,
    setQuestions,
    startClicked,
    setStartClicked,
  } = useContext(FormContext);

  const getCategoryID = (categoryName) => {
    const searchedCategory = categoriesJSON.trivia_categories.find(
      (cat) => cat.name === categoryName
    );
    return searchedCategory ? searchedCategory.id : null;
  };
  const start = () => {
    const url =
      `https://opentdb.com/api.php?amount=${number}` +
      (category !== "Any Category"
        ? `&category=${getCategoryID(category)}`
        : "") +
      (difficulty !== "Any Difficulty"
        ? `&difficulty=${difficulty.toLowerCase()}`
        : "");
    console.log(url);

    axios
      .get(url)
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.error(err));
    setStartClicked(true);
  };
  return (
    <div
      className={`${classes.startForm} ${
        startClicked ? classes.displayNone : ""
      }`}
    >
      <h1>KVIZ</h1>
      <div className={classes.startForm__settings}>
        <h2>POSTAVKE</h2>
        <CategoryInput />
        <DifficultyInput />
        <NumberInput />
      </div>
      <button onClick={start}>Start</button>
    </div>
  );
}
export default StartForm;
