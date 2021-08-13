import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import TaskList from './../TaskList/TaskList';
import { Switch, Route } from 'react-router';
import NewTask from '../NewTask/NewTask';
import ViewTaskDetails from '../ViewTaskDetails/ViewTaskDetails';

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="mainPage">
        <Navbar />
        <Switch>
          <Route path="/addNewTask" component={NewTask}></Route>
          <Route path="/allTasks/:id" component={ViewTaskDetails}></Route>
          <Route path="/" component={TaskList}></Route>
        </Switch>
      </div>
    );
  }
}

export default MainPage;
