import React, { useReducer } from 'react'
const intialState=0;
const counterReducer=(state,action)=>{
switch(action.type){
    case 'INC':return state+1;
    case 'DEC':return state-1;
    case 'RESET':return 0;
    default: return state;
}
}
const UseReducer = () => {
    const [counter,dispatch]=useReducer(counterReducer,intialState);
  return (
    <div>
      <button onClick={()=>{dispatch({type:'INC'})}}>+</button>
      <div>Counter:{counter}</div>
      <button onClick={()=>{dispatch({type:'DEC'})}}>-</button>
      <button onClick={()=>{dispatch({type:'RESET'})}}>Reset</button>
    </div>
  )
}

export default UseReducer
