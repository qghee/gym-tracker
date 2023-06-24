import React from "react";
import "./TrackerPage.css";

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

  
  /*  
  const [currExercise, setCurrExercise] = React.useState()
  
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
    console.log(update, currIdx)
  }, [currIdx]);


  const updateKG = React.useCallback((exercise) => {
    setCurrIdx(-1);
    exercise.prevKg = newKG;
    localStorage.setItem(exercise.id, JSON.stringify(exercise));
  });

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
                    

                    {update &&(
                      <button onClick={() => setCurrIdx(exercise.id)}>kndfjvglniksfjgsgfljnuik</button>
                    )}
                      
                    {currIdx == exercise.id &&(
                    <form>
                      <label>
                        <input type="number" value={newKG} onChange={(e) => setNewKG(e.target.value)} />
                      </label>
                      <button onClick={() => updateKG(exercise)}>Update</button>
                    </form>

                    )}

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
