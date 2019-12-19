import React, {Component} from 'react';
import './MyPokemonList.css';

import MyPokemon from './MyPokemon';

import back from '../assets/back.png';

class MyPokemonList extends Component {
  constructor(props){
    super(props);

    this.state = {backClicked: false, passDetails: this.props.passDetails}

    this.back = this.back.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
  }

  deleteBtn = (index) => {
    this.setState( (oldState) => {
      var arr = oldState.passDetails;

      arr = arr.filter(el => el.index != index);

      return {passDetails: arr};
    });
  }

  back(){
    this.setState((oldState) =>{
      var clicked = oldState.backClicked;

      if(clicked == false){
        clicked = true;
      }
      else {
        clicked = false;
      }
      this.props.myClicked(clicked, this.state.passDetails);
      return{backClicked: clicked};
    });
  }
  render(){
    return (
      <div className="MyPokemonList">
        <div className="top-container">
          <div className="backto-button" onClick={this.back}>
            <img src={back} />
          </div>
          <div className="my-list-text-container">
            <p className="my-list-text">My Pokemons</p>
          </div>
        </div>
        <div className="my-bottom-container">
          {Object.values(this.state.passDetails).map((item, index) => <MyPokemon name={item.pokemonName} nickname={item.pokemonNick} img={item.pokemonImg} index={index} deleteBtn={this.deleteBtn} />)}
        </div>
      </div>
    );
  }
}

export default MyPokemonList;
