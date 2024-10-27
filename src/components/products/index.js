import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import './style.css';
function ProductList({name,city,dummyProductData}){//destructuring props directly
// function ProductList(props){//we can directly destructure the properties like {name,city}
    // destructuring
    // const{name,city}=props;
    // console.log(props)
    // 2nd way
    // const flag=false;
    const [flag,setFlag]=useState(true)
    const[count,setCount]=useState(0);
    const[changeStyle,setChangeStyle]=useState(false);
    function renderTextBlock(getFlag){
        return getFlag?<h4>Name is {name},he/she belongs to this city{city}</h4>:<h4>Hello World!</h4>
    }
    // 3 rd way
    const renderTextBlock1=flag?<h4>Name is {name},he/she belongs to this city{city}</h4>:<h4>Hello World!</h4>;
    // 4 th way
    let renderTextBlock2=null;
    if(flag){
        renderTextBlock2=<h4>Name is {name},he/she belongs to this city{city}</h4>;
    }else{
        renderTextBlock2=<h4>Hello World!</h4>;
    }
    function handleToggleText(){
        setFlag(!flag)
    }
    function handleIncreaseCount(){
        setCount(count+1);
    }
    useEffect(()=>{
        setFlag(!flag)
        console.log("run only once on page load");
        return()=>{
            console.log("component will unmount->some side effects here also");
            
        }
    },[])
    useEffect(()=>{
// console.log("count changes");
if(count===10)setChangeStyle(true)


    },[count])
    console.log(changeStyle);
    return(
        <div>
            <h3 className="title">Ecommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* condition stmts */}
            {/*1st way {flag?<h4>Name is {name},he/she belongs to this city{city}</h4>:<h4>Hello World!</h4>}// same defined inside the function */}
            {/* {renderTextBlock(flag)} */}
            {flag?<h4>Name is {name},he/she belongs to this city{city}</h4>:<h4>Hello World!</h4>}
            <div>
                <button style={{background:changeStyle?'black':'white',color:changeStyle?'white':'black'}}onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count:{count}</p>
            </div>
            
            <ul>
                {dummyProductData.map((item,index)=>(
                    // <li key={index}>{item}</li>
                    <ProductItem singleProductItem={item} key={index}/>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;