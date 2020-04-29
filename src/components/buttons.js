

export const Buttons = () => {
    return <div className="workout-buttons">
                <button id="startstop" onClick="startStop()" onLoad="initialStartButton">Begin Workout</button>
                <button id="reset-workout" onClick="resetTimer()">Reset Workout</button>
            </div>
}