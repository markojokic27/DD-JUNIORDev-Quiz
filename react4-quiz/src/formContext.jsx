import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("Any Category");
  const [difficulty, setDifficulty] = useState("Any Difficulty");
  const [number, setNumber] = useState(4);
  const [startClicked, setStartClicked] = useState(false);
  
  const [isValid, setIsValid] = useState({
    email: false,
    name: false,
    address: false,
  });

  const contextValue = {
    questions,
    setQuestions,
    category,
    setCategory,
    difficulty, 
    setDifficulty,
    number,
    setNumber,
    isValid,
    setIsValid,
    startClicked,
    setStartClicked,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};