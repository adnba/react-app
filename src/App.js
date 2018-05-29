import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'afe84', name: "john", age: 5 },
      { id: '5ac1dd', name: "robert", age: 16 },
      { id: 'adaz4', name: "mary", age: 85 }
    ],
    displayPersons: false
  }

  togglePersonsHandler = () => {
    this.setState({
      displayPersons: !this.state.displayPersons
    });
  }

  changeNameHandler = (event, index) => {
    const persons = this.state.persons.slice();
    persons[index].name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (event, index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.displayPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person name={person.name} age={person.age} key={person.id} changeName={(event) => this.changeNameHandler(event, index)}
            delete={this.deletePersonHandler.bind(this, index)} />
            )}
        </div>
      );
      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'].backgroundColor = 'pink';
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
      if (this.state.persons.length <= 1)
        classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h3>Hello React</h3>
        <p className={classes.join(' ')}>It's Working !!!</p>
        <button style={buttonStyle} onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
