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
      <div className="newTaskContainer">
        <form className="newTask-Form" onSubmit={this.handleSubmit}>
          <div className="newTask-Header">{this.handleText()}</div>
          <div className="newTask-Body">
            <div className="newTask-Title">
              <label className="title-label">Task Title:</label>
              <input
                className="title-input"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitle}
              />
            </div>
            <div className="newTask-Description">
              <label className="description-label">Task Description:</label>
              <input
                className="title-description"
                type="text"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleDescription}
              />
            </div>
            <div className="newTask-Category">
              <label className="category-label">Task Category:</label>
              <select className="select-Category" id="category" onChange={this.handleCategory}>
                <option className="category-option">Choose...</option>
                <option value="Call">Call</option>
                <option value="Email">Email</option>
                <option value="Meeting">Meeting</option>
                <option value="TeamBuilding">TeamBuilding</option>
              </select>
            </div>
            <div className="newTask-Status">
              <label className="status-label">Task Status:</label>
              <select className="select-Status" id="status" onChange={this.handleStatus}>
                <option className="status-option">Choose...</option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="newTask-Footer">
              <button className="newTask-SubmitBtn" type="submit">
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
