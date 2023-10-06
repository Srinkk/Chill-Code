import { Routes, Route } from "react-router-dom";
import Code_Section from "./Component/Code_Section";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element= {<Code_Section/>}/>
      </Routes>
    </div>
  );
}

export default App;
