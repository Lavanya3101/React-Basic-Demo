import React, { useCallback, useMemo, useState } from 'react'

const UseCallbakExample1 = () => {
    const[count,setCount]=useState(0);
    const[value,setValue]=useState('');
const increment=useCallback(()=>{
    // console.log("count")
    setCount((preCount)=>preCount+1);
    
},[])
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>Increment</button>
      <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='type something....'></input>
    </div>
  )
}

export default UseCallbakExample1
