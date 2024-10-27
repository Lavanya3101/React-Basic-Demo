import React, { createContext, useContext } from 'react'

const ThemeContext=createContext('light');
export const UseContextEx = () => {
    const theme=useContext(ThemeContext);

  return (
    <div>
      <p>The current theme is {theme}</p>
    </div>
  )
}

export default UseContextEx
