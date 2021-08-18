import React, { Component } from 'react';
import '../TaskList/TaskList.css';
import { getAllTasks } from '../../service/fetchData';

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
        {this.state.tasksData.map(({ _id, title, description, status }) => (
          <div className="taskList-Card " key={_id}>
            <div className="taskList-Card__Header">
              <h3 className="taskList-Card__Title">{title} </h3>
            </div>
            <div className="taskList-Card__Body ">
              <p className="taskList-Card__BodyDescription">
                <strong>Description: </strong>
                {description}
              </p>
              <p className="taskList-Card__Status">
                <strong>Status: </strong>
                {status}
              </p>
              <div className="taskList-Card__Btn">
                <button className="view-details__Btn" onClick={() => this.handleView(_id)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
