import '../main.css';
import {Menu} from '../pages/menu';
import {title} from '../title';
import {Header} from '../header';
import {WorkoutTable} from '../pages/workout-table';
import {Buttons} from '../pages/buttons';
import {Timer} from '../pages/timer';
import {NextExercise} from '../pages/next-exercise';

const Page = () => {
  return  <div>
            <Menu></Menu>
            <div className="top-container">
              
              <h1> {title}</h1>
              
            </div>
            <div className="main">
              <div className="left-main">
                
                <Header animal={{name: "owl"}}>teste</Header>
                <WorkoutTable></WorkoutTable>
              </div>
              <div className="right-main">
                <div className="workout-progress">
                <Buttons></Buttons>
                <Timer></Timer>
                </div>
                <div className="next-exercise-display">
                <NextExercise></NextExercise>
                </div>
              </div>

            </div>

          
          
          </div>
}

export default Page;