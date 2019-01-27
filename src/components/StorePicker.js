import React from 'react';
import {getFunName} from '../helpers';

const StroePicker=(props)=>{
    var myInput=React.createRef();

    function goToStore(event){
        event.preventDefault(); // to stop form from submitting
        props.history.push(`/store/${myInput.current.value}`)
    }

    return (
    <form className='store-selector' onSubmit={goToStore}>
        <h2>Please Enter A Store Name</h2>
        <input 
            type='text'
            ref={myInput} 
            required 
            placeholder='Enter Store Name' 
            defaultValue={getFunName()}/>
        <button type='submit'>Visit Store -></button>
    </form>)
}

export default StroePicker;