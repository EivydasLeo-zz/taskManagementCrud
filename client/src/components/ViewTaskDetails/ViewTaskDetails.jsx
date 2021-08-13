import React, { Component } from 'react';

class ViewTaskDetails extends Component {
  state = {};
  render() {
    return (
      <div className="viewTaskDetail-Container">
        <div className="viewTaskDetail-cardBody">
          <h6 className="cardBody-Title">Title: </h6>
          <h6 className="cardBody-Description">Description: </h6>
          <h6 className="cardBody-Category">Category: </h6>
          <h6 className="cardBody-Status">Status: </h6>
          <h6 className="cardBody-CreationDate">Creation Date: </h6>
          <h6 className="cardBody-UpdateDate">Update Date: </h6>
          <button className="cardBody-EditBtn">Edit</button>
          <button className="cardBody-Delete">Delete</button>
        </div>
      </div>
    );
  }
}

export default ViewTaskDetails;
