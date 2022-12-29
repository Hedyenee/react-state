
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import photo from './photo1.png';




class App extends React.Component {
  state = {
    person: {
      fullName: 'Hedyene Mili',
      imgSrc: photo ,
      bio: 'A software dev',
      profession: 'Software dev'
    },
    shows: false,
    timeInterval: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ shows: !this.state.shows })}>Toggle</button>
        {this.state.shows && (
          <div>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time interval: {this.state.timeInterval} seconds</p>
      </div>
    )
  }
}

export default App;