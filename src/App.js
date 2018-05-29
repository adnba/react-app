import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let buttonStyle = '';

    if (this.state.displayPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => <ErrorBoundary key={person.id}>
            <Person name={person.name} age={person.age} changeName={(event) => this.changeNameHandler(event, index)}
            delete={this.deletePersonHandler.bind(this, index)} />
            </ErrorBoundary>
            )}
        </div>
      );
      buttonStyle = styles.Red;
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
      if (this.state.persons.length <= 1)
        classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h3>Hello React</h3>
        <p className={classes.join(' ')}>It's Working !!!</p>
        <button className={buttonStyle} onClick={this.togglePersonsHandler} >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
