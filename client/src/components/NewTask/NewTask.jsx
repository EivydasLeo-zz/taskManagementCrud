import React, { Component } from 'react';

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
  render() {
    return (
      <div className="newTaskContainer">
        <form className="newTask-Form">
          <div className="newTask-Title">
            <label className="title-label">Task Title:</label>
            <div>
              <input type="text" placeholder="Title" />
            </div>
            <label className="description-label">Task Description:</label>
            <div className="newTask-Description">
              <input type="text" placeholder="Description" />
            </div>
          </div>
          <div className="newTask-Category">
            <label className="category-label">Task Category:</label>
            <select name="category" id="category">
              <option className="category-option">Choose...</option>
              <option value="Call">Call</option>
              <option value="Email">Email</option>
              <option value="Meeting">Meeting</option>
              <option value="TeamBuilding">TeamBuilding</option>
            </select>
          </div>
          <div className="newTask-Status">
            <label className="status-label">Task Status:</label>
            <select name="status" id="status">
              <option className="status-option">Choose...</option>
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <button className="newTask-SubmitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTask;
