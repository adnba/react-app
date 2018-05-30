import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

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

    let persons = null;

    if (this.state.displayPersons)
      persons = <Persons 
        persons={this.state.persons}
        changeNameHandler={this.changeNameHandler}
        deletePersonHandler={this.deletePersonHandler} />

    return (
      <div className={styles.App}>
        <Cockpit
          personsLength={this.state.persons.length}
          displayPersons={this.state.displayPersons}
          togglePersonsHandler={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
