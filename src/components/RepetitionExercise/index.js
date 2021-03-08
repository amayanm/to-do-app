import React from'react';

export default class RepetitionExercise extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            value: this.props.value
        }
    }
    addOne(){
        this.setState((prevState) => ({
            value: prevState.value + 1,
        }))
    }
    render(){
        return(
            <>
                <p>{this.props.name}</p>
                <p>Reps Completed: {this.state.value}</p>
                <button onClick={() => this.addOne()}>Complete Rep</button>
            </>
        )
    }
}