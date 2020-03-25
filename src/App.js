import React, {Component} from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state ={
      todos: [],
      currentTodo: '',
    };
  }

//this is where our methods will go
  handleChange = (event) => {
    console.log(event.target.value);
  }

  addItem = (event) => {
    event.preventDefault();
    console.log('the add item method executed');
  }



  render() {
    return(
      <div className='container'>
        <form onSubmit={this.addItem}>
          <label htmlFor ='taskName'>Task Name:</label>
          <input onChange={this.handleChange} name='taskName' placeholder='Place your ToDo here'/>
          <button type='submit'>Add Task</button>
        </form>
        <ul>
        {
                this.state.todos.map((q, key) => {
                    return(
                        <li key={key}>{q}</li>
                    )
                })
            }
          //Here is where I want to map through the todo list 
        </ul>
      </div>
    )
  };
}

export default TodoList;
