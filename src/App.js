import React, { Component } from 'react';

class App extends Component {
  render(){
    return(
      <div>
        <Counter nama="Barcelona" />
        <Counter nama="Real Madrid" />
      </div>
    )
  }
}

export default App;

class Header extends Component {
  render(){
    return(
      <h1>Ini dari class Header</h1>
    )
  }
}

class Counter extends Component {
  state = {
    angka: 0
  }

  // function Nambah
  nambah = () => {
    this.setState({
      angka: this.state.angka + 1
    })
  }

  // function Ngurang
  ngurang = () => {
    this.setState({
      angka: this.state.angka - 1
    })
  }

  render(){
    return(
      <div>
        <h1>{this.props.nama}</h1>
        <h3>{this.state.angka}</h3>
        <button onClick={this.nambah}>Tambah</button>
        <button onClick={this.ngurang}>Kurang</button>
      </div>
    )
  }
}