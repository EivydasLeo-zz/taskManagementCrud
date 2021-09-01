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
      <div className="task-list__container">
        {this.state.tasksData.map(({ _id, title, description, status }) => (
          <div className="task-list__card " key={_id}>
            <div className="task-list__card-header">
              <h3 className="task-list__card-title">{title} </h3>
            </div>
            <div className="task-list__card-body ">
              <p className="task-list__card-body__description">
                <strong>Description: </strong>
                {description}
              </p>
              <p className="task-list__card-status">
                <strong>Status: </strong>
                {status}
              </p>
              <div className="task-list__card-btn">
                <button className="view-details__btn" onClick={() => this.handleView(_id)}>
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
