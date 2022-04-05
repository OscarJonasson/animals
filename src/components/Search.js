import React from 'react';
import classes from './Search.module.css';

const Search = props => {
  return (
    <div className={classes.search__container}>
      <input className={classes.search__input}></input>
    </div>
  );
};

export default Search;
