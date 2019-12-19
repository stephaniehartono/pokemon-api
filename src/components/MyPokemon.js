import React, {Component} from 'react';
import './MyPokemon.css';

import deletebtn from '../assets/close.png';
import pokemon from '../assets/bulbasaur.png';

class MyPokemon extends Component {
  constructor(props){
    super(props);

    this.state={delete: false}

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState((oldState) =>{
      var clicked = oldState.delete;

      if(clicked == false){
        clicked = true;
      }

      else {
        clicked = false;
      }
      this.props.deleteBtn(this.props.index);
      return{delete: clicked};
    });
  }

  render(){
    return (
      <div className="MyPokemon">
        <div className="delete-button" onClick={this.onClick}>
          <img src={deletebtn} />
        </div>
        <div className="my-pokemon-pic">
          <img src={this.props.img} />
        </div>
        <div className="my-pokemon-name">
          <p className="my-pokemon-text">{this.props.name} as </p>
          <p className="my-pokemon-text">{this.props.nickname} </p>
        </div>
      </div>
    );
  }
}

export default MyPokemon;
