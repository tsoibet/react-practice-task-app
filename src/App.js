import React from "react";
import InputBar from "./components/InputBar";
import Overview from "./components/Overview";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.state = {
      input: '',
      tasks: [new Task(0, "SAMPLE TASK1")],
      nextId: 1,
      editing: null,
      editValue: ''
    };
  }

  handleInputChange(value) {
    this.setState({input: value});
  }

  handleSubmit(event) {
    const taskObject = new Task(this.state.nextId, this.state.input);
    this.setState({
      input: '',
      tasks: this.state.tasks.concat(taskObject),
      nextId: this.state.nextId + 1
    });
    event.preventDefault();
  }

  deleteTask(event) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== Number(event.target.dataset.id))
    });
  }

  editTask(event) {
    this.setState({
      editing: event.target.dataset.id,
      editValue: document.querySelector(`.name[data-id="${event.target.dataset.id}"]`).textContent
    });
  }

  handleEditChange(value) {
    this.setState({editValue: value});
  }

  submitEdit(event) {
    if (this.state.editValue) {
      const newList = this.state.tasks.map((task) => {
        if (task.id == event.target.dataset.id) {
          return new Task(task.id, this.state.editValue)
          }
        return task;
      });
      this.setState({
        tasks: newList,
        editing: null
      });
    }
  }

  render() {
    return (
      <div className="App">
        <InputBar
          inputValue={this.state.input} 
          onInputChange={this.handleInputChange} 
          onSubmit={this.handleSubmit} 
          editing={this.state.editing} />
        <Overview 
          tasks={this.state.tasks}
          onClickDelete={this.deleteTask} 
          onClickEdit={this.editTask} 
          editValue={this.state.editValue} 
          onEditChange={this.handleEditChange} 
          onSubmitEdit={this.submitEdit} 
          editing={this.state.editing} />
      </div>
    );
  }

}

class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export default App;
