import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import firebase from "./firebaseConfig";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>#partiuBurgerQueen</h1>
        </header>
      </div>
    );
  }
}

export default App;
