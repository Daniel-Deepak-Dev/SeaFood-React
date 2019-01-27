import React from "react";

const AddFishForm = (props) => {
    let fishNameRef=React.createRef();
    let costRef=React.createRef();
    let avaiabilityRef=React.createRef();
    let descriptionRef=React.createRef();
    let imageRef=React.createRef();
    
    function createFish(e){
      e.preventDefault()
      let fish = {
        name:fishNameRef.current.value,
        cost:parseFloat( costRef.current.value),
        avaiability:avaiabilityRef.current.value,
        description:descriptionRef.current.value,
        image:imageRef.current.value
      } 
        // console.log(e)
        props.addFish(fish)
        e.currentTarget.reset();
    }
  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name='name' type='text' ref={fishNameRef} placeholder="Name The Fish" />
      <input name='prise' type='text' ref={costRef}  placeholder="Cost" />
      <select name='status' ref={avaiabilityRef} >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea  ref={descriptionRef} placeholder="Description" />
      <input name='image'  ref= {imageRef}type='text' placeholder='image'/>
      <button>+ Add Fish</button>
    </form>
  );
};

export default AddFishForm;
