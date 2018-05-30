import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

export default props => 
  props.persons.map((person, index) => <ErrorBoundary key={person.id}>
    <Person name={person.name} age={person.age} changeName={(event) => props.changeNameHandler(event, index)}
    delete={props.deletePersonHandler.bind(this, index)} />
    </ErrorBoundary>
    )