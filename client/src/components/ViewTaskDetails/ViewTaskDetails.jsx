import React, { Component } from 'react';
import { getSingleTask } from './../../service/fetchData';

class ViewTaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetailsData: [],
    };
  }

  async getTask() {
    const currentTaskId = this.props.match.params.id;
    const task = await getSingleTask(currentTaskId);
    console.log(task);
    console.log(this.props);
    this.setState({ taskDetailsData: task });
  }

  componentDidMount() {
    this.getTask();
  }

  render() {
    return (
      <div className="viewTaskDetail-Container">
        {this.state.taskDetailsData.map((obj) => (
          <div className="viewTaskDetail-cardBody" key={obj._id}>
            <h6 className="cardBody-Title">Title: {obj.title} </h6>
            <h6 className="cardBody-Description">Description:{obj.description} </h6>
            <h6 className="cardBody-Category">Category: {obj.category} </h6>
            <h6 className="cardBody-Status">Status: {obj.status} </h6>
            <h6 className="cardBody-CreationDate">Creation Date: </h6>
            <h6 className="cardBody-UpdateDate">Update Date: </h6>
            <button className="cardBody-EditBtn">Edit</button>
            <button className="cardBody-DeleteBtn">Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default ViewTaskDetails;
