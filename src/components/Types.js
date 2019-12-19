import React, {Component} from 'react';
import './Types.css';

class Types extends Component {
  constructor(props){
    super(props);

    var typeName  = ["normal", "fire", "fighting", "water", "flying", "grass",
                    "poison", "electric", "ground", "pyschic", "rock", "ice",
                    "bug", "dragon", "ghost", "dark", "steel", "fairy"];

    var typeColor = ["#a8a878","#f08030"," #c03027", "#6990f0", "#a890f0", "#78c850",
                    "#a040a0", "#f8d02f", "#e0c068", "#ed5583", "#b8a038", "#98d8d8",
                    "#a8b820", "#7038f8", "#705898", "#4c3c31", "#b8b8d0",
                    "#ee99ac"];

    this.state = {typeName: typeName, typeColor: typeColor}
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    var color = "";
    for(var i = 0; i < this.state.typeName.length; i++){
      if(this.props.name == this.state.typeName[i]){
        color = this.state.typeColor[i];
      }
    }
    return color;
  }

  render(){
    return (
      <div className="Types" style={{backgroundColor: this.changeColor()}}>
        <p className="types-text">{this.props.name}</p>
      </div>
    );
  }
}

export default Types;
