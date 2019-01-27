import React, { Component } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends Component {
  loadSampleFishes=this.loadSampleFishes.bind(this)// just know how to bind the method
  state={
    fishes:{},
    order:{}
  }
  addFish=(fish)=>{
    let fishes={...this.state.fishes};
    fishes[`fish${parseInt(Date.now()/1000000000)}`]=fish
    this.setState({fishes:fishes})
  }
  loadSampleFishes(){
    this.setState({fishes:sampleFishes})
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className='menu'>
          <Header tagline='Fresh Seafood market'/>        
          <ul>
            {Object.keys(this.state.fishes).map((ele)=><Fish key={ele} fishDetails={this.state.fishes[ele]}/>)}
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
