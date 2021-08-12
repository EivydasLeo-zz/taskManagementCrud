import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import TaskList from './../TaskList/TaskList';
class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="mainPage">
        <Navbar />
        <TaskList />
      </div>
    );
  }
}

export default MainPage;
