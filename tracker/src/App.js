import React from "react"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    //element: <App />,
  },
  {
    path: "pull",
    element: <TrackerPage dayName="Pull Day" />,
  },
  {
    path: "push",
    element: <TrackerPage dayName="Push Day" />,
  },
  {
    path: "leg",
    element: <TrackerPage dayName="Leg Day" />,
  }
]);

function App() {
  return (

    
    <div>
      <RouterProvider router={router} />
      <a href="/pull">
        pull
      </a>
      <a href="/push">
        push
      </a>
      <a href="/leg">
        legs
      </a>
    </div> 

    
    /* 
    <div className="App">
      
      <TrackerPage dayName="Pull Day" />
    </div> */

  );

}

export default App;
