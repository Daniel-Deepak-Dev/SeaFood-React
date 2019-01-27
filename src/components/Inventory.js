import React from 'react';
import AddFishForm from './AddFish';

const Header = (props) => {
    return (
    <div className='inventory'>
    <h2>Inventory</h2>
    <AddFishForm addFish={props.addFish}/>
    <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
    </div>)
}

export default Header;