
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import photo from './photo1.png';




class App extends React.Component {
  state = {
    person: {
      fullName: 'Hedyene Mili',
      imgSrc: photo ,
      bio: 'I am a software developer with a passion for building web applications.',
      profession: 'Software Developer'
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
      <div className='App'>
        <button onClick={() => this.setState({ shows: !this.state.shows })} >Toggle</button>
        {this.state.shows && (
          <div >
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} style={{ height:'40vmin',alignItems: 'center' }} />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <p>Time interval: {this.state.timeInterval} seconds</p>
          </div>
        
        )}
       
      </div>
    )
  }
}

export default App;