import React from "react";

class Overview extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleClickDelete(event) {
    this.props.onClickDelete(event);
  }

  handleClickEdit(event) {
    this.props.onClickEdit(event);
  }

  handleEditChange(event) {
    this.props.onEditChange(event);
  }

  handleEditSubmit(event) {
    this.props.onSubmitEdit(event);
  }

  render() {
    return(
      <ul className="Overview">
        {this.props.tasks.map((task) => 
          <TaskItem 
            key={task.id} 
            task={task} 
            handleClickDelete={this.handleClickDelete} 
            handleClickEdit={this.handleClickEdit} 
            editValue={this.props.editValue} 
            handleEditChange={this.handleEditChange} 
            handleEditSubmit={this.handleEditSubmit} 
            editing={this.props.editing} />)}
      </ul>
    );
  }

}

class TaskItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleClickDelete(event) {
    this.props.handleClickDelete(event);
  }

  handleClickEdit(event) {
    this.props.handleClickEdit(event);
  }

  handleEditChange(event) {
    this.props.handleEditChange(event.target.value);
  }

  handleEditSubmit(event) {
    this.props.handleEditSubmit(event);
  }

  render() {
    if (this.props.editing != this.props.task.id) {
      return(
        <li className="task">
          <div className="id">{this.props.task.id}</div>
          <div className="name" data-id={this.props.task.id}>{this.props.task.name}</div>
          <button className="edit" data-id={this.props.task.id} onClick={this.handleClickEdit}>Edit</button>
          <button className="delete" data-id={this.props.task.id} onClick={this.handleClickDelete}>X</button>
        </li>
      );
    } else {
        return(
          <li className="task">
            <div className="id">{this.props.task.id}</div>
            <input type="text" placeholder="Task" autoComplete="off" required value={this.props.editValue} onChange={this.handleEditChange} />
            <button className="edit" data-id={this.props.task.id} onClick={this.handleEditSubmit}>Submit</button>
            <button className="delete" data-id={this.props.task.id} onClick={this.handleClickDelete}>X</button>
          </li>
        );
    }
  }

}

export default Overview;