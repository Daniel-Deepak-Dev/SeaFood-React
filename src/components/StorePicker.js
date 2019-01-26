import React from 'react';
import {getFunName} from '../helpers';

const StroePicker=()=>{
    return (
    <form className='store-selector'>
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Enter Store Name' defaultValue={getFunName()}/>
        <button type='submit'>Visit Store -></button>
    </form>)
}

export default StroePicker;