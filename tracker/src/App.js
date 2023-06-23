import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import TrackerPage from "./components/tracker/TrackerPage";
import Menu from "./components/menu/Menu";

const TAB_INDEX_MAP = ["pull", "push", "leg"];

function App() {
  const [tabIndex, setTabIndex] = React.useState(-1);
  return (
    <div className="main-container">
      {tabIndex == -1 ?(
        <>
          <div className="center">
            Welcome <br/> Please select a workout split to get started :D
            {/* change to something else */}
          </div>
        </>
      ):(

        <TrackerPage dayName={TAB_INDEX_MAP[tabIndex]}></TrackerPage>

      )}
      <div className="menu-bar">
        <Menu tabIndexProp={[tabIndex, setTabIndex]} />
      </div>
    </div>
  );
}

export default App;

//LEGACY

// const router = createBrowserRouter([
//   {
//     path: "pull",
//     element: <TrackerPage dayName="Pull Day" />,
//   },
//   {
//     path: "push",
//     element: <TrackerPage dayName="Push Day" />,
//   },
//   {
//     path: "leg",
//     element: <TrackerPage dayName="Leg Day" />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// <div className="main-container">
//      {/* <RouterProvider router={router} /> */}
//
//      <TrackerPage dayName={TAB_INDEX_MAP[tabIndex]}></TrackerPage>
//      <div className="menu-bar">
//        <Menu tabIndexProp={[tabIndex, setTabIndex]} />
//      </div>
//    </div>
