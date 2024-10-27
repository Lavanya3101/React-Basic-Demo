import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json=>setData(json));
    },[])
    
  return (
    <div>
        <h1>Posts</h1>
        <ul>
      {data.map(post=>(
        <li key={post.id}>{post.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default UseEffectEx
