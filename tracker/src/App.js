import React from "react"
import './App.css';

import TrackerPage from "./components/tracker/TrackerPage";


const Ting = props => {
  const [repCount, setRepCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setRepCount(prev => prev + 1)} className="my-button-style">{props.type} </button>
      <div>
        Rep Count:
        {repCount}
      </div>
    </>
  )
}



function App() {
  return (
    <div className="App">         
          <TrackerPage dayName="Pull Day"/> 
    </div>

  );

}

export default App;
