import React from "react";
import "./TrackerPage.css";
import * as SVGs from "./img/CombinedSVG.js";

/* 
const DEFAULT_EXCERCISES =[
    {type: "Pulldown", rep: 0, id: 1, },
    {name: "Row", rep: 0, id: 2}
    {name,rep,id,type}
]
*/

const getDataFromLocalStorage = () => {
  let i = 0;
  let storedItem = localStorage.getItem(i);
  let finalArr = [];

  while (storedItem != undefined && storedItem.length > 0) {
    finalArr.push(JSON.parse(storedItem));
    i++;
    storedItem = localStorage.getItem(i);
  }

  console.log("Finished loading data from local storage");

  return finalArr;
};

const TrackerPage = ({ dayName }) => {
  /*  const [exercises, setExercises] = React.useState(DEFAULT_EXCERCISES)*/
  const [exercises, setExercises] = React.useState(() => getDataFromLocalStorage());

  const [newExerciseName, setNewExerciseName] = React.useState("");

  const [showForm, setShowForm] = React.useState(false);

  const [newKG, setNewKG] = React.useState(0);

  const [currIdx, setCurrIdx] = React.useState(-1);
  const [update, setUpdate] = React.useState(true);

  const [showBody, setShowBody] = React.useState(false);
  const [Body, setBody] = React.useState(null);

  /*  
  const [currExercise, setCurrExercise] = React.useState()
  
  const addNewExercise = () => {
    setExercises(p => [...p, {name: newExerciseName, id: p.length + 1, type: dayName}])
        setShowForm(false)
        setNewExerciseName("")
    }
    */

  const openWorkedMuscles = (content) => {
    setBody(content);
    setShowBody(true);
  };

  const addNewExercise = React.useCallback(() => {
    const newExercise = {
      name: newExerciseName,
      id: exercises.length,
      type: dayName,
      prevKg: 0,
    };

    setExercises((p) => [...p, newExercise]);
    localStorage.setItem(newExercise.id, JSON.stringify(newExercise));

    setShowForm(false);
    setNewExerciseName("");
  });

  React.useEffect(() => {
    setShowForm(false);
    setNewExerciseName("");
  }, [exercises]);

  React.useEffect(() => {
    setUpdate((update) => !update);
    console.log(update, currIdx);
  }, [currIdx]);

  const updateKG = React.useCallback((exercise) => {
    setCurrIdx(-1);
    exercise.prevKg = newKG;
    localStorage.setItem(exercise.id, JSON.stringify(exercise));
  });

  const deleteItem = React.useCallback(
    (id, idx) => {
      setExercises((exercises) => {
        exercises.splice(idx, 1);
        return [...exercises];
      });
      localStorage.removeItem(id);
    },
    [exercises]
  );

  return (
    <>
      <div className="center">
        <h1>{dayName ? dayName : "Exercise Day"}</h1>
        {exercises.filter((exercise) => exercise.type === dayName).length > 0 ? (
          exercises
            .filter((exercise) => exercise.type === dayName)
            .map((exercise, idx) => {
              return (
                <div key={exercise.id}>
                  <h3>{exercise.name}</h3>
                  <p>
                    Description of {exercise.name}
                    <br />
                    Last Weight (kg): {exercise.prevKg}
                    {update && (
                      <div>
                        <button className="tracker-button" onClick={() => setCurrIdx(exercise.id)}>
                          Update Weight
                        </button>
                        <button className="tracker-button-delete" onClick={() => deleteItem(exercise.id, idx)}>
                          {" "}
                          Delete
                        </button>
                      </div>
                    )}
                    {currIdx === exercise.id && (
                      <form>
                        <label>
                          <input type="number" value={newKG} onChange={(e) => setNewKG(e.target.value)} />
                        </label>
                        <button className="tracker-button" onClick={() => updateKG(exercise)}>
                          Update
                        </button>
                        <button className="tracker-button" onClick={() => setCurrIdx(-1)}>
                          Cancel
                        </button>
                      </form>
                    )}
                  </p>
                </div>
              );
            })
        ) : (
          <div style={{ paddingBottom: "25px" }}>Your routine is currently empty, Add a new exercise</div>
        )}

        <button className="tracker-button" onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "CANCEL" : "+"}
        </button>

        {showForm && (
          <>
            <form>
              <label>New Exercise Name:</label>
              <input value={newExerciseName} onChange={(val) => setNewExerciseName(val.target.value)} />
              <button className="tracker-button" onClick={addNewExercise}>
                Add new Exercise
              </button>
            </form>
          </>
        )}

        <button className="tracker-button" onClick={() => openWorkedMuscles(<SVGs.FrontMusclesSVG />)}>
          Show Worked Muscles
        </button>

        {showBody && (
          <div className="popup">
            <div className="popup-content">
              <button className="tracker-button-delete" onClick={() => setShowBody(false)}>
                Close
              </button>
              {Body}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrackerPage;
