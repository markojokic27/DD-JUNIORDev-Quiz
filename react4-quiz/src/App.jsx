import "./App.css";
import Quiz from "./Quiz.jsx";
import { FormProvider } from './formContext.jsx';
function App() {
  return (
    <FormProvider>
      <div className="app">
        <Quiz />
      </div>
    </FormProvider>
  );
}
export default App;
