import logo from "./logo.svg";
import "./App.css";
import BasicUseEffect from "./components/BasicUseEffect";
import TimerContainer from "./components/TimerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <BasicUseEffect /> */}
        <TimerContainer />
      </header>
    </div>
  );
}

export default App;
