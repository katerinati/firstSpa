import React, { Component } from 'react';
import '../App.css';
import staticData from '../staticData';
import Profile from './Profile.js'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isHeaderOpened: true,
      isProfileCardDisliked: false
    };
    this.handleClick = this.handleClick.bind(this)
}
  handleClick() {
    this.setState(state => ({
      isHeaderOpened: !state.isHeaderOpened,
      isProfileCardDisliked: !state.isProfileCardDisliked
    }));
  }

  render() {
    return (
      <div className="App">
        {this.state.isHeaderOpened ? <header className="App-header">
          <h1 className="App-title">Hello! This is your feed</h1>
          <button onClick={this.handleClick}>Dismiss</button>
        </header> : <button onClick={this.handleClick}>Bye</button>}
        <div>
          {staticData.map(function (el) {
            return (
                <Profile name={el.name} age={el.age} location={el.location}/>
            )
          })
          }

        </div>
      </div>
    );
  }
}

export default App;
