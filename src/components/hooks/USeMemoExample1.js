import React, { useMemo, useState } from 'react'

const USeMemoExample1 = () => {
    const [counter,setCounter]=useState(1);
    let num1=10;
    let num2=20;
    let sum=useMemo(()=>{
        console.log(num1+num2)
        return num1+num2;
        
    },[num1,num2])
  return (
    <div>
      <button onClick={()=>{setCounter(counter+1)}}>UpdateCounter</button>
    <h1>Counter:{counter}</h1>
    <h2>Sum:{sum}</h2>
    </div>
  )
}

export default USeMemoExample1
