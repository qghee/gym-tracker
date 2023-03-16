import React from 'react'

const DEFAULT_EXCERCISES =[
    {name: "Pulldown", id: 1},
    {name: "Row", id: 2}
]

const TrackerPage = ({dayName}) => {
 
    const [exercises, setExercises] = React.useState(DEFAULT_EXCERCISES)

    const [newExerciseName, setNewExerciseName] = React.useState("");

    const [showForm, setShowForm] = React.useState(false);
 
    const addNewExercise = () => {
        setExercises(p => [...p, {name: newExerciseName, id: p.length + 1}])
    }

    React.useEffect(() => {
        setShowForm(false)
        setNewExerciseName("")

    }, [exercises])

  return (
    <>  
        <div>
            <h1>{dayName ? dayName : "Exercise Day"}</h1>
            
            {exercises.map((exercise, idx) => {
                return (
                    
                    <div key={exercise.id}>
                        <h3>{exercise.name}</h3>
                        <p>
                            Description of {exercise.name}
                        </p>
                    </div>
                    
                )
            })}

        <button onClick={() => setShowForm(prev => !prev)}>
           {showForm ? "CANCEL" : "+"}  
        </button>

        {showForm && (<>
            <form>
                <label>New Exercise Name:</label>
                <input value={newExerciseName} onChange={val => setNewExerciseName(val.target.value)} />
                <button onClick={addNewExercise}>Add new Exercise</button>
            </form>
        </>)}
        
        </div>
    </>
  )
}

export default TrackerPage