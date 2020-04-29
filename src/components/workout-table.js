import '../css/workout-table.css';

export const WorkoutTable = () => {

    return <div className="workout-table">
                <table id="workout-details">
                    <thead>
                        <tr className="workout-header">
                            <th></th>
                            <th>Exercise</th>
                            <th>Time</th>
                            <th>Rest</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="ex0">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Warm up: High knee taps</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex1">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 1: Russian twists</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex2">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 2: Leg raises</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex3">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 3: Hip raises</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex4">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 4: Flutter kicks</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex5">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 5: Plank climbers</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex6">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 6: Chair sit ups</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex7">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 7: Seated in and outs</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                        <tr id="ex8">
                            <td><button className="ex-btn-play"><i className="fas fa-play"></i></button></td>
                            <td className="ex-name">Exercise 8: Jumping Jacks</td>
                            <td>45"</td>
                            <td>15"</td>
                            <td><button className="ex-btn-del"><i className="fas fa-minus-circle"></i></button></td>
                            <td><button className="ex-btn-dup"><i className="far fa-clone"></i></button></td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
                <div className="workout-controls">
                <p>+ Add new exercise</p>
                </div>
            </div>
        }