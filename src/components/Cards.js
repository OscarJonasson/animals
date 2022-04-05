import React from 'react';
import classes from './Cards.module.css';
import Button from './UI/Button';

const Cards = props => {
  return (
    <div className={classes.card}>
      <img
        className={classes.card__img}
        src={`https://source.unsplash.com/1600x900/?${props.name}`}
        alt={props.name}
        onClick={props.newImage}
      />
      {/* <h3>{props.search}</h3> adds text below picture with search input*/}
      <h2 className={classes.card__title}>{props.name}</h2>
      <div className={classes.card__likes}>
        <p>❤️ {props.likes}</p>
        <Button text="Add Like" click={props.add} />
      </div>
      <div className={classes.card__close} onClick={props.remove}>
        ❌
      </div>
    </div>
  );
};

export default Cards;
