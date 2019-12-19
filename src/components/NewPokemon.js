import React, {Component} from 'react';
import './NewPokemon.css';

import pokemon from '../assets/bulbasaur.png';
import next from '../assets/back.png';

class NewPokemon extends Component {
  constructor(props){
    super(props);

    this.state = {details_clicked: false, index: this.props.index, types: [], moves:[], name: this.props.name, img: this.props.img}
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.index)
    .then((data) => data.json())
    .then((data) => {
      this.setState((oldState) =>{
        var clicked = oldState.details_clicked;
        var img = oldState.img;
        var name = oldState.name;
        var types;
        var moves;
        var typeNames = [];
        var moveNames = [];

        types = data.types;
        moves = data.moves;

        for(var i = 0; i < moves.length; i++){
          moveNames[i] = data.moves[i].move.name;
        }

        for(var i = 0; i < types.length; i++){
          typeNames[i] = data.types[i].type.name;
        }

        if(clicked == false){
          clicked = true;
        }

        else {
          clicked = false;
        }
        this.props.detailsClicked(clicked);
        this.props.types(typeNames);
        this.props.moves(moveNames);
        this.props.pokeDetails(name, img);
        return{details_clicked: clicked, types: typeNames, moves: moveNames};
      });
    });
  }
  render(){
    return (
      <div className="NewPokemon" onClick={this.onClick}>
        <div className="pokemon-pic">
          <img src={this.props.img} />
        </div>
        <div className="pokemon-name">
          <p className="pokemon-text">{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default NewPokemon;
