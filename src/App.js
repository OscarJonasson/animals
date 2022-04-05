import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import { animals } from './components/animals';
import Search from './components/Search';

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

  searchHandler = e => {
    this.setState({
      search: e.target.value.toLowerCase(),
    });
  };

  render() {
    const animalFilter = this.state.animals.filter(animal => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    const animalsList = animalFilter.map(animal => (
      // Key should be unique (animals has no duplicates)
      <Cards
        // search={this.state.search}
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
        <h1 className="heading">
          Animals in the world {this.state.animals.length}
        </h1>
        <input type="text" onChange={this.searchHandler} />
        <h3>{this.state.search}</h3>
        <div className="cards">{animalsList}</div>
      </div>
    );
  }
}

export default App;
