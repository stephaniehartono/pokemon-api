import React, {Component} from 'react';
import './PokemonList.css';

import NewPokemon from './NewPokemon';
import DetailsPage from './DetailsPage';

import next from '../assets/back.png';

class PokemonList extends Component {
  constructor(props){
    super(props);

    this.state = {nextClicked: false, backClicked: false, detailsClicked: false,
      pokemonInfo: this.props.pokemonInfo, total: this.props.total,
      imageLoading: true, toManyRequests: false, types: [], moves: [], name: "", img: ""}

    this.next = this.next.bind(this);
    this.detailsClicked = this.detailsClicked.bind(this);
    this.list_display_none = this.list_display_none.bind(this);
    this.top_display_none = this.top_display_none.bind(this);
    this.bottom_display_none = this.bottom_display_none.bind(this);
    this.passDetails = this.passDetails.bind(this);
  }

  detailsClicked = (c) => {
    this.setState({detailsClicked: c});
  }

  typesUp = (t) => {
    this.setState({types: t});
  }

  movesUp = (m) => {
    this.setState({moves: m});
  }

  backClicked = (c) => {
    this.setState({backClicked: c, detailsClicked: false});
  }

  pokeDetails = (n, i) => {
    this.setState({name: n, img: i});
  }

  passDetails = (nick, name, img) => {
    this.props.myPokemon(nick, name, img);
  }

  list_display_none() {
    if(this.state.detailsClicked){
      return <DetailsPage backDetails={this.backClicked} types={this.state.types} moves={this.state.moves} pokeName={this.state.name} pokeImg={this.state.img} caughtDetails={this.passDetails} />}
    else return Object.values(this.state.pokemonInfo).map((item) => <NewPokemon name={item.pokemonName} img={item.pokeImageUrl} index={item.pokeIndex} detailsClicked={this.detailsClicked} types={this.typesUp} moves={this.movesUp} pokeDetails={this.pokeDetails}/>)
  }

  top_display_none() {
    if(this.state.detailsClicked)
      return "display-none"
    else return "top-container";
  }

  bottom_display_none() {
    if(this.state.detailsClicked)
      return "display-none"
    else return "bottom-container";
  }

  middle_container(){
    if(this.state.detailsClicked)
      return "middle-display-container";
    else return "middle-container";
  }

  next(){
    this.setState((oldState) =>{
      var clicked = oldState.nextClicked;

      if(clicked == false){
        clicked = true;
      }

      else {
        clicked = false;
      }
      this.props.myClicked(clicked);
      return{nextClicked: clicked};
    });
  }

  render(){
    return (
      <div className="PokemonList">
        <div className={this.top_display_none()}>
          <div className="list-text-container">
            <p className="list-text">List of Pokemons</p>
          </div>
          <div className="next-button" onClick={this.next}>
            <img src={next} />
          </div>
        </div>
        <div className={this.middle_container()} onLoad={()=> this.setState({imageLoading: false})} onError={() => this.setState({toManyRequests: true})}>
          {this.list_display_none()}
        </div>
        <div className={this.bottom_display_none()}>
          <p className="owned-text">Total pokemons: {this.props.myP.length}/{this.state.total}</p>
        </div>
      </div>
    );
  }
}

export default PokemonList;
