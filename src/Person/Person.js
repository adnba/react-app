import React from 'react';
import styles from './Person.css';

export default (props) => {
  if (Math.random() > 0.7)
    throw new Error('Something went wrong.');

  return (
    <div className={styles.Person}>
      <p onClick={props.delete} >Hi, my name is {props.name} and my age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} onChange={props.changeName} />
    </div>
  );
}