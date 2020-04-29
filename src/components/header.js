

export const Header = ({children, animal}) => {
    return <div className="workout-header">
                <h2>Workout: "Core"</h2>
                <h3>{children} {animal.name}</h3>
                <div className="workout-description">
                    <p>Description: 3 times a week.</p>
                    <p>Total time: 9 minutes.</p>
                </div>
            </div>
}