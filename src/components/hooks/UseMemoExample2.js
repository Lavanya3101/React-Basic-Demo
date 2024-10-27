import React, { useEffect, useMemo, useState } from 'react'

const UseMemoExample2 = () => {
    const [Time, setTime] = useState(new Date().toLocaleTimeString());

    const[products,setProducts]=useState(
        [
            {id:1,name:'One plus',price:1000},
            {id:2,name:'Oppo plus',price:10500},
            {id:3,name:'Samsung plus',price:21000},

        ]
    )
    const [searchText,updateSearchText]=useState('');

    const filteredProducts=useMemo(()=>{
        console.log(products)
return products.filter((p)=>{return p.name.toLowerCase().includes(searchText.toLowerCase())})
    },[products,searchText])

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])
    return (
        <>
        <div>
            {Time}
        </div>
        <input type='text' value={searchText} onChange={(e)=>{updateSearchText(e.target.value)}}/>
        <div>
            <table border={1}>
                <tr>
                    <td>S.NO</td>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                {filteredProducts.map(p=>(
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                ))}
            </table>
        </div>
        </>
    )
}

export default UseMemoExample2
