import React from 'react';
import './Person.css';

const person = (props) => (
      <div className="person">
          <p onClick={ props.click }>I'm { props.name } age: { props.age }</p>
          <p>{ props.children }</p>
          <input type="text" onChange={ props.changed } />
        </div>
    )
export default person;
