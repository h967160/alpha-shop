import Main from "./components/Main/Main";
import StepContainer from "./components/Main/Step/StepContainer";
import ProgressControl from "./components/Main/Step/ProgressControl";
import Cart from "./components/Main/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Main>
        <StepContainer />
        <Cart />
        <ProgressControl />
      </Main>
    </div>
  );
}

export default App;
