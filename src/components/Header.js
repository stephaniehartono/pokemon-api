import React, {Component} from 'react';
import './Header.css';
import logo from '../assets/pokemon-logo.png';

class Header extends Component {
  changeHeader(){
    if(this.props.clicked || this.props.clicked_2){
      return "Header-clicked";
    }
    else return "Header";
  }
  render(){
    return (
      <div className={this.changeHeader()}>
        <p className="header-text">WELCOME TO THE</p>
        <div className="logo">
          <img src={logo}/>
        </div>
        <p className="header-text">WORLD</p>
      </div>
    );
  }
}

export default Header;
