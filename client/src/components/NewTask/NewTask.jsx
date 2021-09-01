import React, { Component } from 'react';
import { editOneTask, postNewTask } from '../../service/fetchData';
import './NewTask.css';
import { getAllTasks } from './../../service/fetchData';
import { toast } from 'react-toastify';
class NewTask extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      category: '',
      status: '',
    };
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      const task = (await getAllTasks()).find((obj) => obj._id === this.props.match.params.id);
      this.setState(task);
    }
  }

  handleTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  handleCategory = (event) => {
    this.setState({ category: event.target.value });
  };
  handleStatus = (event) => {
    this.setState({ status: event.target.value });
  };

  handleText = () => {
    const editText = 'Edit Task';
    const newTaskText = 'Add New Task';
    if (this.state._id) {
      return editText;
    } else {
      return newTaskText;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const objToSend = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      status: this.state.status,
    };

    if (this.state._id) {
      editOneTask(this.state._id, objToSend);
      this.handleText();
      toast.info(`Task has been edited.`);
    } else {
      postNewTask(objToSend);
      toast.success(`New task has been created.`);
    }

    const history = this.props.history;
    history.push('/');
    console.log('I will send this ', objToSend);
  };

  render() {
    return (
      <div className="new-task__container">
        <form className="new-task__form" onSubmit={this.handleSubmit}>
          <div className="new-task__header">{this.handleText()}</div>
          <div className="new-task__body">
            <div className="new-task__title">
              <label className="title-label">Task Title:</label>
              <input
                className="title-input"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitle}
              />
            </div>
            <div className="new-task__description">
              <label className="description-label">Task Description:</label>
              <input
                className="title-description"
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleDescription}
              />
            </div>
            <div className="new-task__category">
              <label className="category-label">Task Category:</label>
              <select
                className="select-category"
                id="category"
                onChange={this.handleCategory}
                value={this.state.category}
              >
                <option className="category-option">Choose...</option>
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="Meeting">Meeting</option>
                <option value="TeamBuilding">TeamBuilding</option>
              </select>
            </div>
            <div className="new-task__status">
              <label className="status-label">Task Status:</label>
              <select onChange={this.handleStatus} value={this.state.status} className="select-status" id="status">
                <option className="status-option">Choose...</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="new-task__footer">
              <button className="new-task__submit-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTask;
