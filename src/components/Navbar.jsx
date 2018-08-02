import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
            <button onClick={() => { this.props.navigate('home') }}>Home</button>
            <button onClick={() => { this.props.navigate('about') }}>About</button>
            <button  onClick={() => { this.props.navigate('contact') }}>Contact</button>
      </div>
    )
  }
}

export default Navbar;