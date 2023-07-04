import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import TrackerPage from "./components/tracker/TrackerPage";
import Menu from "./components/menu/Menu";
import UpperLowerMenu from "./components/menu/UpperLowerMenu";
import SplitSelector from "./components/menu/SplitSelector";
import Home from "./components/menu/Home";

const TAB_INDEX_MAP = ["Pull", "Push", "Leg🦿", "Upper", "Lower", "Full Body"];


function App() {
  const [tabIndex, setTabIndex] = React.useState(-1);
  const [splitIndex, setSplitIndex] = React.useState(-1);
  return (
    <div className="main-container">
      <div>
        <Home splitSelectorProp={[splitIndex, setSplitIndex]}
             tabIndexProp={[tabIndex, setTabIndex]}/>
      </div>
      {splitIndex == -1 ? (
        <>
          <div className="center">
            Welcome <br /> Please select a workout split to get started :D
            <SplitSelector splitSelectorProp={[splitIndex, setSplitIndex]}
             tabIndexProp={[tabIndex, setTabIndex]}  />
          </div>
        </>
      ) : (
        <TrackerPage dayName={TAB_INDEX_MAP[tabIndex]}></TrackerPage>
      )}
      {splitIndex != -1 && (
        <>
          {splitIndex == 0 && (
            <div className="menu-bar">
              <Menu tabIndexProp={[tabIndex, setTabIndex]} />
            </div>
          )}
          {splitIndex == 1 && (
            <div className="menu-bar">
              <UpperLowerMenu tabIndexProp={[tabIndex, setTabIndex]} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default App;
{
  /*  <div className="menu-bar">
        <Menu tabIndexProp={[tabIndex, setTabIndex]} />
      </div>
  ); }
  
  
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
            //      {/* <RouterProvider router={router} /> }
            //
            //      <TrackerPage dayName={TAB_INDEX_MAP[tabIndex]}></TrackerPage>
            //      <div className="menu-bar">
            //        <Menu tabIndexProp={[tabIndex, setTabIndex]} />
            //      </div>
            //    </div>
            
        */
}
