import React, { Component } from 'react';
import '../TaskList/TaskList.css';

class TaskList extends Component {
  state = {};
  render() {
    return (
      <div className="taskListContainer">
        <div className="taskList-Body">
          <div className="taskList-Table">
            <h3>Task management system</h3>
            <button>Add Task</button>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Meeting</td>
                  <td>Meeting with team</td>
                  <td>Friday</td>
                  <td>Incoming</td>
                  <button>View task details</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
