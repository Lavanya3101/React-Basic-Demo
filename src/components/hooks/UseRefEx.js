import React, { useRef } from 'react'

const UseRefEx = () => {
    const input=useRef(null);
const OnButtonClick=()=>{
    input.current.focus();
}
  return (
    <div>
      <input type='text' ref={input}/>
      <button onClick={OnButtonClick}>Focus the input</button>
    </div>
  )
}

export default UseRefEx
