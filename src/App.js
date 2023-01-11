import logo from "./logo.svg";
import "./App.css";
import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";
import { ApiFetch } from "./components/ApiFetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <BasicUseEffect /> */}
        <TimerContainer />
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
