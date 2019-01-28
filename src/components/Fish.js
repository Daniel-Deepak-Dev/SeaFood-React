import React from 'react';
import {formatPrice} from '../helpers'; 

const Fish=(props)=>{
    let {fishName :name,cost,image,description:desc,availability}=props.fishDetails;
    let isAvailable = availability==='available';

    return(
    <li className='menu-fish'> 
        <img src={image} alt={name}/>
        <h3 className='fish-name'>{name} 
            <span className='price'>{formatPrice(cost)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={()=>{props.addOrder(props.index)}} disabled={!isAvailable}>{(isAvailable)?"Add To Cart":'Sold Out!'}</button>
    </li>)
}

export default Fish;