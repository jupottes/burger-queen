import React from 'react';

function Button (props) {
  return (
    <button className="decrease" onClick={props.onClick}>
        {props.text}
      </button>
  )
}

export default Button;