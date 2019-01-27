import React from 'react';
import {formatPrice} from '../helpers'; 

const Fish=(props)=>{
    let {fishName :name,cost,image,description:desc}=props.fishDetails;

    return(
    <li className='menu-fish'> 
        <img src={image} alt={name}/>
        <h3 className='fish-name'>{name} 
            <span className='price'>{formatPrice( cost)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add To Cart</button>
    </li>)
}

export default Fish;