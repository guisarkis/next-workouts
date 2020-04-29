import '../css/next-exercise.css';

export const NextExercise = () => {
    return  <div id="next-exercises">
                <div id="curr-exercise-div">
                    <div className="curr-exercise-div-title"><h2>In progress:</h2></div>
                    <div><p id="current-exercise"></p></div>
                </div>
                <div id="next-exercise-div">
                    <div className="next-exercise-div-title"><h2>Next up:</h2></div>
                    <div><p id="upcoming-exercise"></p></div>
                </div>
            </div>
}