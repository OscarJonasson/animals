import React from 'react';
import classes from './Cards.module.css';
import Button from './UI/Button';

const Cards = props => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card__img}
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt={`${props.name}`}
      />
      <h2 className={classes.card__title}>{props.name}</h2>
      <div className={classes.card__likes}>
        <p>❤️ {props.likes}</p>
        <Button text="Add Like" click={props.add} />
      </div>
    </div>
  );
};

export default Cards;

// return(
//   <div className={classes.cards}>
//     {this.animals.state.
//     <div className={classes.card}>
//       <img
//         className={classes.card__img}
//         src="https://source.unsplash.com/DJ4vjcD0s0I"
//       ></img>
//       <h2 className={classes.card__title}>{props.name}TIGER</h2>
//       <div className={classes.card__likes}>
//         <p>❤️ 0</p>
//         <Button />
//       </div>
//     </div>
//   </div>
// );
