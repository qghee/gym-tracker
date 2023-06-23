import React from "react";
import "./TrackerPage.css";
import { Link } from "react-router-dom";
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

  const [PrevKg, setPrevKg] = React.useState([]);

  /*  
    const addNewExercise = () => {
        setExercises(p => [...p, {name: newExerciseName, id: p.length + 1, type: dayName}])
        setShowForm(false)
        setNewExerciseName("")
    }
    */

  const addNewExercise = React.useCallback(() => {
    const newExercise = {
      name: newExerciseName,
      id: exercises.length,
      type: dayName,
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

  return (
    <>
      <div className="center">
        <h1>{dayName ? dayName : "Exercise Day"}</h1>
        {exercises[0] == null && (
          <>
            <div style={{ paddingBottom: "25px" }}>Your routine is currently empty, Add a new exercise</div>
          </>
        )}

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
                    Last Weight (kg): {PrevKg[idx] == null ? "0" : PrevKg[idx]}
                  </p>
                </div>
              );
            })
        ) : (
          <div style={{ paddingBottom: "25px" }}>Your routine is currently empty, Add a new exercise</div>
        )}

        <button onClick={() => setShowForm((prev) => !prev)}>{showForm ? "CANCEL" : "+"}</button>

        {showForm && (
          <>
            <form>
              <label>New Exercise Name:</label>
              <input value={newExerciseName} onChange={(val) => setNewExerciseName(val.target.value)} />
              <button onClick={addNewExercise}>Add new Exercise</button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default TrackerPage;
