import React from 'react';
import AddFishForm from './AddFish';

const Header = (props) => {
    return (
    <div className='inventory'>
    <h2>Inventory</h2>
    <AddFishForm addFish={props.addFish}/>
    <AddFishForm />
    <AddFishForm />
    </div>)
}

export default Header;