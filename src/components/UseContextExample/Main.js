import React, { createContext } from 'react'
import Home from './Home';
export const context=createContext();
const Main = () => {
    let data={
        name:'lavanya',
        age:25
    }
  return (
    <>
     <context.Provider value={data}>
<Home/>
        </context.Provider> 
    </>
  )
}

export default Main
