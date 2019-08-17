import React, { Component } from 'react';
import bigData from './Big';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Home from './Home';
import Context from './MyContext';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<Context.Provider value={bigData}><Home/></Context.Provider>, document.getElementById('root'));
