import React from 'react';
import Exercise from '../Exercise';
import Quote from '../Quote';

let todoList = [
  {
    id:1,
    completed:true,
    description: "Complete a TODO list application",
  },
  {
    id:2,
    completed:false,
    description: "Workout of the Day",
  },
]

export default class TodoList extends React.Component{
  constructor(props){
    super(props)
    let inputRef = React.createRef()
    let checkRef = React.createRef()
    let filterRef = React.createRef()
    this.state = {todoList, curId:todoList.length+1, inputRef, checkRef, filterRef, filtered:false}
  }
  completeItem = (itemId) =>{
    this.setState((prevState) =>{
      let prevList = prevState.todoList
      let itemIndex = prevList.findIndex((item) => item.id === itemId)
        prevList[itemIndex] = {
            ...prevList[itemIndex],
            completed: !prevList[itemIndex].completed,
      }
      return {todoList:[...prevList]}
    })
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter"){
      this.addTodoItem()
    }
  }
  addTodoItem = () => {
    let prevValue = this.state.inputRef.current.value
    this.setState(prevState => ({
      todoList:[...prevState.todoList,
        {completed:false, description: prevValue, id:prevState.curId}],
        curId:prevState.curId+1
      }))
    this.state.inputRef.current.value = ""
  }
  render() {
    let todoList = this.state.todoList
      if (this.state.filtered) {
        todoList = todoList.filter(item => !item.completed)
      }

      todoList = todoList.map((item) =>(
        <div key={item.id}>
          <label>
            <input ref={this.state.checkRef} type="checkbox" onChange={() => this.completeItem(item.id)} defaultChecked={item.completed}></input>
            <span style={item.completed ? {textDecoration: "line-through"} : undefined}>{item.description}</span>
          </label>
        </div>
    ))
  return(
    <>
      <h1>Things to do</h1>
    <div class="page">
      <label>
        <p>Filter completed items?</p>
        <input ref={this.state.filterRef} type="checkbox"
          onChange={() => this.setState((prev) => ({filtered: !prev.filtered}))}
          defaultChecked={false}></input>
      </label>
          
      <div style={{padding:"5px"}}>
        {todoList}
      </div>
      <input onKeyPress={(event) => this.handleKeyPress(event)} ref={this.state.inputRef} type="text" placeholder="TODO..."></input>
      <button onClick={() => this.addTodoItem()}>Add TODO item</button>
        <hr></hr>
      <h3>Quote of the day:</h3>
          <Quote/><br/>
        <hr></hr>
      <h3>Workout of the day:</h3>
        <Exercise />
    </div>
    </>
  )
  }
}