import React from 'react';
import classes from './Button.module.css';
const Button = props => {
  return (
    <button onClick={props.click} className={classes.btn}>
      {props.text}
    </button>
  );
};
export default Button;
