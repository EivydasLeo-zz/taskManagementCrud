import React, { Component } from 'react';
import '../TaskList/TaskList.css';

class TaskList extends Component {
  state = {};
  render() {
    return (
      <div className="taskContainer">
        <div className="taskTitle">
          <h1>Task management system</h1>
        </div>
      </div>
    );
  }
}

export default TaskList;
