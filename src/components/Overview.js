import React from "react";

class Overview extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Overview">
        {this.props.tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </div>
    );
  }

}

class TaskItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="task" id={this.props.task.id}>
        <div className="name">{this.props.task.name}</div>
        <div className={`status${this.props.task.isDone ? ' done' : ''}`}>
          {this.props.task.isDone ? ' Done!' : '...'}
        </div>
      </div>
    );
  }

}

export default Overview;