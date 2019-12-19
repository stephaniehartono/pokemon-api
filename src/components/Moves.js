import React, {Component} from 'react';
import './Moves.css';

class Moves extends Component {
  render(){
    return (
      <div className="Moves">
        <p className="moves-text">{this.props.name}</p>
      </div>
    );
  }
}

export default Moves;
