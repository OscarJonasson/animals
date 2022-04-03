import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import { animals } from './components/animals';

class App extends Component {
  state = {
    // Why this works with animals: and without?
    animals,
  };

  addLikeHandler = name => {
    this.setState(state => {
      const updateAnimalsList = state.animals.map(animal => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updateAnimalsList,
      };
    });
  };

  render() {
    const animalsList = this.state.animals.map(animal => (
      <Cards
        key={animal.name}
        name={animal.name}
        likes={animal.likes}
        add={() => this.addLikeHandler(animal.name)}
      />
    ));
    return (
      <div className="App">
        <div className="cards">{animalsList}</div>
      </div>
    );
  }
}

export default App;
