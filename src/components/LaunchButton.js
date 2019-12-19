import React, {Component} from 'react';
import './LaunchButton.css';

class LaunchButton extends Component {
  constructor(props){
    super(props);

    this.state = {clicked: false}

    this.onClick = this.onClick.bind(this);

  }

  clicked(){
    if(!this.state.clicked)
      return "LaunchButton";
    else return "display-none";
  }

  onClick(){
    this.setState((oldState) =>{
      var clicked = oldState.clicked;

      if(clicked == false){
        clicked = true;
      }

      else {
        clicked = false;
      }
      this.props.sendInfo(clicked);
      return{clicked: clicked};
    });
  }

  render(){
    return (
      <div className={this.clicked()} onClick={this.onClick}>
        <p className="button-text">LET'S GO!</p>
      </div>
    );
  }
}

export default LaunchButton;
