import React, {Component} from 'react';
import './DetailsPage.css';

import back from '../assets/back.png';
import pokemonpic from '../assets/bulbasaur.png';

import CatchButton from './CatchButton';
import Types from './Types';
import Moves from './Moves';
import PopUp from './PopUp';

class DetailsPage extends Component {
  constructor(props){
    super(props);

    this.state={back_clicked: false, types: this.props.types,
      moves: this.props.moves, catch: 0, pokeName: this.props.pokeName, pokeImg: this.props.pokeImg, caught: false, nickname: ""}

    this.onClick = this.onClick.bind(this);
    this.ifCaught = this.ifCaught.bind(this);
  }

  getCaught = (c) =>{
    this.setState({catch: c});
  }

  caughtPokemon = (s, n) => {
    this.props.caughtDetails(n, this.state.pokeName, this.state.pokeImg);
    this.setState(
      {caught: s, catch: 0, nickname: n}
    );
  }

  ifCaught() {
    if(this.state.catch == 1){
      return <PopUp name={this.state.pokeName} img={this.state.pokeImg} submit={this.caughtPokemon} />
    }
    else return null;
  }

  onClick(){
    this.setState((oldState) =>{
      var clicked = oldState.back_clicked;

      if(clicked == false){
        clicked = true;
      }

      else {
        clicked = false;
      }
      // this.props.caughtDetails(this.state.nickname, this.state.pokeName, this.state.pokeImg);
      this.props.backDetails(clicked);
      return{back_clicked: clicked};
    });
  }
  render(){
    return (
      <div className="DetailsPage">
        <div className="back-button" onClick={this.onClick}>
          <img src={back} />
        </div>
        <div className="poke-pic">
          <img src={this.state.pokeImg}/>
        </div>
        {this.ifCaught()}
        <div className="details-container">
          <div className="poke-name-container">
            <p className="poke-name-text">{this.state.pokeName}</p>
          </div>
          <div className="type-container">
            <p className="type-move-text">Type</p>
            <div className="types">
              {Object.values(this.state.types).map((item) => <Types name={item} />)}
            </div>
          </div>
          <div className="move-container">
            <p className="type-move-text">Move</p>
            <div className="moves">
              {Object.values(this.state.moves).map((item) => <Moves name={item} />)}
            </div>
          </div>
        </div>
        <CatchButton getCaught={this.getCaught}/>
      </div>
    );
  }
}

export default DetailsPage;
