import React from 'react'
import Home from './Home';

const Main = () => {
    let isAdmin='true';
  return (
    <div>
      <Home data={isAdmin}/>
    </div>
  )
}

export default Main
