import React, {Component} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import DetailsPage from './components/DetailsPage';
import NewPokemon from './components/NewPokemon';
import MyPokemonList from './components/MyPokemonList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {pokemonInfo: [{pokemonName: "", pokeIndex: "", pokeImageUrl:""}], count: 0}
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((data) => data.json())
    .then((data) =>{
      this.setState( (oldState) => {
        var a = oldState;
        var index = [];
        var imageUrls = [];
        var name = [];
        var types = [];
        for(var i = 0; i < data.results.length; i++){
          name[i] = data.results[i].name;
          index[i] = data.results[i].url.split('/')[data.results[i].url.split('/').length-2];
          imageUrls[i] = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/" + index[i]+ ".png?raw=true";
        }
        for(var i = 0; i < name.length; i++){
          a.pokemonInfo[i] = {pokemonName: name[i], pokeIndex: index[i], pokeImageUrl: imageUrls[i]}
        }

        a.count = data.count;
        return a;
      });
    });
  }
  render(){
    return (
      <div className="App">
        <Homepage total={this.state.count} pokemonInfo={this.state.pokemonInfo} />
      </div>
    );
  }
}

export default App;
