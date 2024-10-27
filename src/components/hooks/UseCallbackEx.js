import React, { useCallback, useState } from 'react'

function button({handleClick,children}){
return <button onClick={handleClick}>{children}</button>
}
const UseCallbackEx = () => {
const [count,setCount]=useState(0);
const increment=useCallback(()=>{
    setCount(c=>c+1);
},[]);
  return (
    <div>
     <p>Count:{count}</p> 
     <button handleClick={increment}>Increment</button>
    </div>
  )
}

export default UseCallbackEx
