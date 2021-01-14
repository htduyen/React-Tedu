import './App.css';
import Persion from "./component/Persion";
function App() {
  return (
    <div className="App">
      <header>
        <a>
          Learn React
        </a>
      </header>
      <Persion name="Duyen" age="23"> </Persion> 
      <Persion name="Duyen" age="23"> My hobbie: Teacher </Persion> 
      <Persion name="Duyen" age="23"> </Persion> 
    </div>
  );
}

export default App;
