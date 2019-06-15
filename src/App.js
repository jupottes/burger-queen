import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Contador from './components/Contador'

import firebase from "./firebaseConfig";

class App extends React.Component {
  render() {
    return (
      <div>
        <Contador />
      </div>
    );
  }
}

export default App;
