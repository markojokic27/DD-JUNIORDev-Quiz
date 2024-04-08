import "./App.css";
import QuizForm from "./components/QuizForm/QuizForm";
import StartForm from "./components/StartForm/StartForm";
import { FormProvider } from "./formContext";

function Quiz() {

  return (
    <FormProvider>
      <div className="quiz">
        <StartForm />
        <QuizForm />
      </div>
    </FormProvider>
  );
}
export default Quiz;
