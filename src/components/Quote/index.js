import React from 'react';

const quotes = [
    `"Never let the fear of striking out keep you from playing the game" ― Babe Ruth`,
    //`"If you focus on what you left behind, you will never see what lies ahead."— Gusteau, Ratatouille`,
    //`"The way to get started is to quit talking and begin doing." — Walt Disney`,
    //`"It’s never too early for ice cream." — Michael Scott, The Office`,   
]

export default class Quote extends React.Component{
    constructor(props){
        super(props)
        this.state = {quotes}
    }
    render(){
        let quotes = this.state.quotes
        return(
            <div>
                <p>{quotes}</p>
            </div>
        )
    }
}

//let index = Math.floor (Math.random() * 4);
//console.log(quotes[index])