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
    this.state = {
      input: '',
      tasks: [new Task(0, "SAMPLE TASK1")],
      nextId: 1
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

  render() {
    return (
      <div className="App">
        <InputBar
          inputValue={this.state.input} 
          onInputChange={this.handleInputChange} 
          onSubmit={this.handleSubmit} />
        <Overview 
          tasks={this.state.tasks}
          onClickDelete={this.deleteTask} />
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
