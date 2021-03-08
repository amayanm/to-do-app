import React from 'react';

export default class DurationExercise extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        value: this.props.strValue,
        time: 0
      }
     }
    startTimer() {
        this.timer = setInterval(() => this.setState({
          time: this.state.time + 1
        }), 1000)
      }
    stopTimer() {
        clearInterval(this.timer)
      }
    render() {
      return(
        <div>
            <p>{this.props.name}</p>
            <p>Timer: {this.state.time} sec</p>
            <button onClick={() => this.startTimer()}>Start</button>
            <button onClick={() => this.stopTimer()}>Stop</button>
        </div>
      );
    }
}