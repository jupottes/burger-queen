import React from 'react';
import './button.css';

function Button (props) {
  return (
    <button className="buttonCont" onClick={props.onClick}>
        {props.text}
      </button>
  )
}

export default Button;