import React, {Component} from 'react';
import './LaunchButton.css';

class CatchButton extends Component {

  constructor(props){
    super(props);

    this.state={caught: 0}

    this.onClick=this.onClick.bind(this);
  }

  onClick (){
    var min = 0;
    var max = 1;
    var rand = Math.round(min + Math.random() *(max-min));

    this.props.getCaught(rand);
    this.setState({caught: rand});
  }

  render(){
    return (
      <div className="LaunchButton" onClick={this.onClick}>
        <p className="button-text">CATCH!</p>
      </div>
    );
  }
}

export default CatchButton;
