import React from 'react';
import Radium from 'radium';
import './Person.css';

export default Radium((props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.delete} >Hi, my name is {props.name} and my age is {props.age}.</p>
      <p>{props.children}</p>
      <input type="text" defaultValue={props.name} onChange={props.changeName} />
    </div>
  );
})