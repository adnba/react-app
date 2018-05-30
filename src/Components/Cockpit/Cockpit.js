import React from 'react';
import styles from './Cockpit.css';

export default props => {
  let buttonStyle = '';

  if (props.displayPersons)
    buttonStyle = styles.Red;

  const classes = [];
    if (props.personsLength <= 2) {
      classes.push(styles.red);
      if (props.personsLength <= 1)
        classes.push(styles.bold);
    }
  
  return (
    <div className={styles.Cockpit}>
      <h3>Hello React</h3>
      <p className={classes.join(' ')}>It's Working !!!</p>
      <button className={buttonStyle} onClick={props.togglePersonsHandler} >Toggle Persons</button>
    </div>);
}