import React, { Component } from 'react';
import './ViewTaskDetails.css';
import { deleteOneTask, getSingleTask } from './../../service/fetchData';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

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
    toast.error(`Task has been deleted.`);
    this.props.history.push('/allTasks');
  }

  handleEdit(_id) {
    this.props.history.push('/allTasks/edit/' + _id);
  }

  componentDidMount() {
    this.handleGetTask();
  }

  render() {
    const { _id, title, description, category, status, createdAt, updatedAt } = this.state.taskDetailsData;
    return (
      <div className="view-task__detail-container">
        <div className="view-task__detail-card" key={_id}>
          <div className="card-header">
            <h3 className="card-title">{title} </h3>
          </div>
          <div className="card-body">
            <p className="card-body__description">
              <strong>Description: </strong>
              {description}
            </p>
            <p className="card-body__category">
              <strong>Category:</strong> {category}
            </p>
            <p className="card-status">
              <strong>Status: </strong>
              {status}
            </p>
            <p className="card-body__creation-date">
              <strong>Creation Date:</strong> {createdAt}
            </p>
            <p className="card-body__update-date">
              <strong>Update Date:</strong> {updatedAt}
            </p>
          </div>
          <div className="card-dots"> </div>
          <div className="fa-icons">
            <FontAwesomeIcon className="fa-edit" icon={faEdit} onClick={() => this.handleEdit(_id)} />
            <FontAwesomeIcon className="fa-trash" icon={faTrashAlt} onClick={() => this.handleDelete(_id)} />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewTaskDetails;
