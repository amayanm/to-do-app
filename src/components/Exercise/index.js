import React from 'react';
import RepetitionExercise from '../RepetitionExercise';
import DurationExercise from '../DurationExercise';

const HOME = "home"
const DURATION_SCREEN = "duration"
const REPETITION_SCREEN = "repetition"

export default class Exercise extends React.Component {
  constructor(props){
    super(props)
    this.state = {currentScreen: HOME, selectedItem: undefined}
  }
    render(){
       let exercises = [
         {exerType: "repetition", name: "Arm Circles", value: 0},
         {exerType: "duration", name: "Tricep Pushups", strValue: "duration1" },
         {exerType: "repetition", name: "Lateral Pull Down", value: 0},
         {exerType: "duration", name: "Burpees", strValue: "duration2"},   
         {exerType: "repetition", name: "Dumbbell Arnold Press", value: 0},
         {exerType: "duration", name: "Plank Rotations", strValue: "duration3"},       
       ]
    let screen
       switch (this.state.currentScreen) {
         case HOME:
           screen =
              <>
                <ul>
                  {exercises.map((exer, index) =>
                    exer.exerType === "repetition" ? (
                    <li key={index}>
                      <button onClick={() => this.setState({currentScreen:REPETITION_SCREEN, selectedItem: exer})}>{exer.name}</button>
                    </li>  
                   ) : (
                  <li key={index}>
                    <button onClick={() => this.setState({currentScreen:DURATION_SCREEN, selectedItem: exer})}>{exer.name}</button>
                  </li> 
                   )
                  )}
                </ul>
              </>
           break;
          case DURATION_SCREEN:
              screen = 
                <>
                <DurationExercise {...this.state.selectedItem}></DurationExercise>
                <button onClick={ () => this.setState({currentScreen:HOME})}>Back</button>
                </>
            break;
          case REPETITION_SCREEN:
              screen = 
                <>
                <RepetitionExercise {...this.state.selectedItem}></RepetitionExercise>
                <button onClick={ () => this.setState({currentScreen:HOME})}>Back</button>
                </>
            break;
       }
    return screen
    }
  }