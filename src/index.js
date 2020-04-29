import '../main.css';
import {Menu} from './components/menu';
import {title} from './title';
import {Header} from './components/header';
import {WorkoutTable} from './components/workout-table';
import {Buttons} from './components/buttons';
import {Timer} from './components/timer';
import {NextExercise} from './components/next-exercise';

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