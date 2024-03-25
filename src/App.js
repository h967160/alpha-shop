import Main from "./components/Main/Main";
import StepContainer from "./components/Main/Step/StepContainer";
import ProgressControl from "./components/Main/Step/ProgressControl";

function App() {
  return (
    <div className="App">
      <Main>
        <StepContainer />
        <ProgressControl />
      </Main>
    </div>
  );
}

export default App;
