import React from "react"
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import TrackerPage from "./components/tracker/TrackerPage";
import Home from "./components/tracker/Home";
import Menu from "./components/menu/Menu";


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
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (


    <div className="main-container">
      <RouterProvider router={router} />
      <div className="menu-bar">
      <Menu />
      </div>
    </div> 

    
    /* 
    <div className="App">
      
      <TrackerPage dayName="Pull Day" />
    </div> */

  );

}

export default App;
