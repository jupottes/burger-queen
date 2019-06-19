import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Menu from './components/menu'
import firebase from "./firebaseConfig";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Menu />
      </div>
    );
  }
}

export default App;
