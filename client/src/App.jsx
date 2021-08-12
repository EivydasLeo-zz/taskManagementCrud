import './App.css';
import React, { Component } from 'react';
import MainPage from './components/MainPage/MainPage';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="appContainer">
        <MainPage />
      </div>
    );
  }
}

export default App;
