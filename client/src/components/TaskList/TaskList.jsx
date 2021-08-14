import React, { Component } from 'react';
import '../TaskList/TaskList.css';
import { getAllTasks } from '../../service/fetchData';
import { Link } from 'react-router-dom';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksData: [],
    };
  }

  async getTasks() {
    const tasks = await getAllTasks();
    this.setState({ tasksData: tasks });
  }

  componentDidMount() {
    this.getTasks();
  }

  async handleView(id) {
    this.props.history.push('/allTasks/' + id);
  }

  render() {
    return (
      <div className="taskListContainer">
        <div className="taskList-Body">
          <div className="taskList-Table">
            <h3>Task management system</h3>
            <Link to="/addNewTask">
              <button>Add Task</button>
            </Link>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>More Details</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tasksData.map(({ _id, title, description, status }) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{status}</td>
                    <td>
                      <button onClick={() => this.handleView(_id)}>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
