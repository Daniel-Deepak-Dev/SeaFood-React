import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  state={
    fishes:{},
    order:{}
  }
  addFish=(fish)=>{
    let fishes={...this.state.fishes};
    fishes[`fish${parseInt(Date.now()/1000000000)}`]=fish
    this.setState({fishes:fishes})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className='menu'>
          <Header tagline='Fresh Seafood market'/>        
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App;
