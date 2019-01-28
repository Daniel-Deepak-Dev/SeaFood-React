import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends Component {
  loadSampleFishes = this.loadSampleFishes.bind(this); // just know how to bind the method
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount(){
    this.ref= base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state:'fishes'
    })
  }
  componentWillUnmount(){
    base.removeBinding(this.ref) //will remove the data after unmounting
  }

  addFish = fish => {
    let fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes: fishes });
  };

  loadSampleFishes() {
    this.setState({ fishes: sampleFishes });
  }

  addOrder = key => {
    // console.log(order)
    let order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    // previousOrder[`order${Date.now()}`]=order;
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        /<div className="menu">
          <Header tagline="Fresh Seafood market" />
          <ul>
            {Object.keys(this.state.fishes).map(ele => {
              return (
                <Fish
                  key={ele}
                  index={ele}
                  fishDetails={this.state.fishes[ele]}
                  addOrder={this.addOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
