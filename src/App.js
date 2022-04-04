import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import { animals } from './components/animals';

class App extends Component {
  state = {
    animals: animals,
    isloading: '',
    search: '',
  };

  addLikeHandler = whatever => {
    this.setState(prevState => {
      const updateAnimalsList = prevState.animals.map(animal => {
        if (animal.name === whatever) {
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

  removeHandler = name => {
    const wantedAnimals = this.state.animals.filter(
      animal => animal.name !== name
    );
    this.setState({
      animals: wantedAnimals,
    });
  };

  // Safer way of doing it?
  // removeHandler = name => {
  //   this.setState(state => {
  //     const wantedAnimals = state.animals.filter(animal => {
  //       return animal.name !== name;
  //     });
  //     return {
  //       animals: wantedAnimals,
  //     };
  //   });
  // };

  render() {
    const animalsList = this.state.animals.map(animal => (
      // Key should be unique (animals has no duplicates)
      <Cards
        key={animal.name}
        name={animal.name}
        likes={animal.likes}
        add={() => this.addLikeHandler(animal.name)}
        // remove={() => this.removeHandler(animal.name)} different way below
        remove={this.removeHandler.bind(this, animal.name)}
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
