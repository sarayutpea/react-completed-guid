import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = { 
    persons: [
      { name: "pae", age: 25 },
      { name: "oor", age: 25 },
      { name: "stable", age: 26 }
    ],
    otherstate: "some other value"
  }

  switchNameHandler = (event)=>{
    // console.log('was click');
    this.setState({
      persons: [
        { name: "newName", age: 28 },
        { name: (event.target.value ? event.target.value : ``) , age: 29 },
        { name: (event.target.value ? event.target.value : ``), age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: `white`,
      borderRadius: `10px`,
      font: `inherlit`,
      border: `1px sloid`,
      padding: `8px`,
      cursor: `pointer`
    }

    return (
      <div className="App">
        <h1> Hello I'm Pae</h1>
        <h3>it is really working!</h3>
        <button 
          style={ style }
          onClick={ this.switchNameHandler.bind(this, "biginner") }>Switch name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
        <Person click={ this.switchNameHandler.bind(this, "foreigners") } changed={ this.switchNameHandler } name={ this.state.persons[1].name } age={ this.state.persons[1].age } />
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Does this work now`));
  }
}

export default App;
