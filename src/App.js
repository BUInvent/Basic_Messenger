import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>Login Page here!</h1>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              {/* <Route path="/slack-added" component={SlackAdded} /> */}
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
