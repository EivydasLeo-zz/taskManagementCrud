import React, { Component } from 'react';
import { getSingleTask } from './../../service/fetchData';

class ViewTaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskDetailsData: [],
    };
  }

  async componentDidMount() {
    const currentTaskId = this.props.match.params.id;
    const task = await getSingleTask(currentTaskId);
    this.setState({ taskDetailsData: task });
  }

  render() {
    return (
      <div className="viewTaskDetail-Container">
        <div className="viewTaskDetail-cardBody" key={this.state.taskDetailsData._id}>
          <h6 className="cardBody-Title">Title: {this.state.taskDetailsData.title} </h6>
          <h6 className="cardBody-Description">Description:{this.state.taskDetailsData.description} </h6>
          <h6 className="cardBody-Category">Category: {this.state.taskDetailsData.category} </h6>
          <h6 className="cardBody-Status">Status: {this.state.taskDetailsData.status} </h6>
          <h6 className="cardBody-CreationDate">Creation Date: </h6>
          <h6 className="cardBody-UpdateDate">Update Date: </h6>
          <button className="cardBody-EditBtn">Edit</button>
          <button className="cardBody-DeleteBtn">Delete</button>
        </div>
      </div>
    );
  }
}

export default ViewTaskDetails;
