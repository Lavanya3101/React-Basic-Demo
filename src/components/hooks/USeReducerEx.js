import React, { useReducer } from 'react'

const intialState={count:0};
function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {count:state.count+1};
      case 'decrement':
        return {count:state.count-1};
        default:
          return state;
  }
}
const USeReducerEx = () => {
  const [state,dispatch]=useReducer(reducer,intialState);

  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
    </div>
  )
}

export default USeReducerEx
