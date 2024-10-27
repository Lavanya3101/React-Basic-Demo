import React, { useContext } from "react"
import {context} from './Main'
const Product=()=>{
    let data=useContext(context)
     const {name,age}=data;
    return(
        
        <>
{/* <h2>Name :{data.name} Age:{data.age}</h2> */}
<h2>Name :{name} Age:{age}</h2>
        </>
    )
}
export default Product