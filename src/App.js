import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/dark-theme.scss";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
