import React from "react";
import InputBar from "./components/InputBar";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      tasks: [...this.state.tasks, taskObject],
      nextId: this.state.nextId + 1
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <InputBar
          inputValue={this.state.input} 
          onInputChange={this.handleInputChange} 
          onSubmit={this.handleSubmit} />
        <Overview 
          tasks={this.state.tasks} />
        <Footer />
      </div>
    );
  }

}

class Task {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.isDone = false;
  }
}

export default App;
