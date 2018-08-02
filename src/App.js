import React, { Component } from 'react';
import HomeContainer from './container/HomeContainer';
import AboutContainer from './container/AboutContainer';
import ContactContainer from './container/ContactContainer';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    page: "home"
  }

  // Cara 1
  keHome = () => {
    this.setState({
      page: "home"
    })
  }

  keAbout = () => {
    this.setState({
      page: "about"
    })
  }

  keContact = () => {
    this.setState({
      page: "contact"
    })
  }
  // Cara 1

  // Cara 2
  pindah = (halaman) => {
    this.setState({
      page: halaman
    })
  }
  // Cara 2

  render(){
    return(
      
      <div>
        {/* Cara 1 */}
        {/* <button onClick={this.keHome}>Home</button>
        <button onClick={this.keAbout}>About</button>
        <button  onClick={this.keContact}>Contact</button>

        {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        {this.state.page === "contact" && <ContactContainer />} */}
        {/* Cara 1 */}
      
        {/* Cara 2 */}
        {/* <button onClick={() => { this.pindah('home') }}>Home</button>
        <button onClick={() => { this.pindah('about') }}>About</button>
        <button onClick={() => { this.pindah('contact') }}>Contact</button> */}

        {/* {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        {this.state.page === "contact" && <ContactContainer />} */}
        {/* Cara 2 */}
        
        {/* Cara 3 */}
        {/* <button onClick={() => { this.setState({ page: 'home'}) }}>Home</button>
        <button onClick={() => { this.setState({ page: 'about'}) }}>About</button>
        <button onClick={() => { this.setState({ page: 'contact'}) }}>Contact</button> */}

        {/* {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        {this.state.page === "contact" && <ContactContainer />} */}
        {/* Cara 3 */}

        {/* Cara 4 */}
        <Navbar navigate={this.pindah} />

        {this.state.page === "home" && <HomeContainer />}
        {this.state.page === "about" && <AboutContainer />}
        {this.state.page === "contact" && <ContactContainer />}
        {/* Cara 4 */}
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