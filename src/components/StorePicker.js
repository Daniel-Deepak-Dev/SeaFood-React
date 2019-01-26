import React from 'react';
// import '.'

const StroePicker=()=>{
    return (
    <form className='store-selector'>
        <h2>Please Enter A Store</h2>
        <input type='text' required placeholder='Enter Store Name'/>
        <button type='submit'>Visit Store -></button>
    </form>)
}

export default StroePicker;