import React, {Component} from 'react';
import './Homepage.css';
import Header from './Header';
import LaunchButton from './LaunchButton';
import PokemonList from './PokemonList';
import MyPokemonList from './MyPokemonList';

class Homepage extends Component {
  constructor(props){
    super(props);

    this.state = {clicked_button: false, next: false, back: false, total: 0, pokemonInfo: [{pokemonName: "", pokeIndex: "", pokeImageUrl:""}], myPokemon: []};

    this.sendButtonInfo = this.sendButtonInfo.bind(this);
    this.showList = this.showList.bind(this);
  }

  componentWillReceiveProps(props){
    this.setState( () => {
      return {total: props.total, pokemonInfo: props.pokemonInfo};
    });
  }

  sendButtonInfo = (clicked_info) => {
    this.setState({clicked_button: clicked_info});
  }

  myPokemon = (c) => {
    this.setState({next: c});
  }

  Pokemon = (c, p) => {
    this.setState({back: c, next: false, myPokemon: p });
  }

  passDetails = (nick, name, img) => {
    var addPokemon = this.state.myPokemon.concat({pokemonName: name, pokemonNick: nick, pokemonImg: img, index: this.state.myPokemon.length});
    this.setState({myPokemon: addPokemon})
  }

  showList(){
    if(this.state.clicked_button && !this.state.next) return <PokemonList myClicked={this.myPokemon} total={this.state.total} pokemonInfo={this.state.pokemonInfo} myPokemon={this.passDetails} myP={this.state.myPokemon} />
    else if(this.state.next) return <MyPokemonList myClicked={this.Pokemon} passDetails={this.state.myPokemon} />
    else return null;
  }

  render(){
    return (
      <div className="Homepage">
        <Header clicked={this.state.clicked_button} clicked_2={this.state.next}/>
        <LaunchButton sendInfo={this.sendButtonInfo} />
        {this.showList()}
      </div>
    );
  }
}

export default Homepage;
