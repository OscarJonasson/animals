import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import { animals } from './components/animals';

class App extends Component {
  state = {
    animals: animals,
  };
  render() {
    const animalsList = this.state.animals.map(animal => (
      <Cards key={animal.name} name={animal.name} likes={animal.likes} />
    ));
    return (
      <div className="App">
        <div className="cards">{animalsList}</div>
      </div>
    );
  }
}

export default App;
