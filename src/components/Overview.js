import React from "react";

class Overview extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(event) {
    this.props.onClickDelete(event);
  }

  render() {
    return(
      <ul className="Overview">
        {this.props.tasks.map((task) => 
          <TaskItem 
            key={task.id} 
            task={task} 
            handleClickDelete={this.handleClickDelete} />)}
      </ul>
    );
  }

}

class TaskItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(event) {
    this.props.handleClickDelete(event);
  }

  render() {
    return(
      <li className="task">
        <div className="id">{this.props.task.id}</div>
        <div className="name">{this.props.task.name}</div>
        <div className="delete" data-id={this.props.task.id} onClick={this.handleClickDelete}>X</div>
      </li>
    );
  }

}

export default Overview;