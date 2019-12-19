import React, {Component} from 'react';
import './PopUp.css';
import pokemon from '../assets/bulbasaur.png';

class PopUp extends Component {

  constructor(props){
    super(props);

    this.state={nickname: "", submit_clicked: false}

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event){
    this.setState({nickname: event.target.value});
  }

  onClick(){
    this.setState((oldState) =>{
      var clicked = oldState.submit_clicked;

      if(clicked == false){
        clicked = true;
      }

      else {
        clicked = false;
      }
      this.props.submit(clicked, this.state.nickname);
      return{submit_clicked: clicked};
    });
  }

  render(){
    return (
      <div className="pop-up-container">
        <div className="PopUp">
          <div className="poke-info">
            <div className="p-pic">
              <img src={this.props.img}/>
            </div>
            <p className="popup-text">You caught a {this.props.name}!</p>
          </div>
          <div className="nickname-info">
            <p className="popup-text-2">Nickname:</p>
            <input className="nickname-form" type="text" value={this.state.nickname} onChange={this.handleChange} placeholder="insert nickname.."/>
          </div>
          <div className="submit-button" onClick={this.onClick}>
            <p className="submit-text">Submit</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
