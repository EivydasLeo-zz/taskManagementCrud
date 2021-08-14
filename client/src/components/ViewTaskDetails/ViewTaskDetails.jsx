import React, { Component } from 'react';
import { deleteOneTask, getSingleTask } from './../../service/fetchData';

class ViewTaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetailsData: [],
    };
  }

  async handleGetTask() {
    const currentTaskId = this.props.match.params.id;
    const task = await getSingleTask(currentTaskId);
    console.log(task);
    console.log(this.props);
    this.setState({ taskDetailsData: task });
  }

  async handleDelete(taskId) {
    await deleteOneTask(taskId);
    this.props.history.push('/allTasks');
  }

  componentDidMount() {
    this.handleGetTask();
  }

  render() {
    const { _id, title, description, category, status, createdAt, updatedAt } = this.state.taskDetailsData;
    return (
      <div className="viewTaskDetail-Container">
        <div className="viewTaskDetail-cardBody" key={_id}>
          <h6 className="cardBody-Title">Title: {title} </h6>
          <h6 className="cardBody-Description">Description:{description} </h6>
          <h6 className="cardBody-Category">Category: {category} </h6>
          <h6 className="cardBody-Status">Status: {status} </h6>
          <h6 className="cardBody-CreationDate">Creation Date: {createdAt}</h6>
          <h6 className="cardBody-UpdateDate">Update Date: {updatedAt}</h6>
          <button className="cardBody-EditBtn">Edit</button>
          <button className="cardBody-DeleteBtn" onClick={() => this.handleDelete(_id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ViewTaskDetails;
