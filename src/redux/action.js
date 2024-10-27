export const increment=()=>({
    type:'increment',
})

export const decrement=()=>({
    type:'decrement',
})

//dispatching actions
function Counter(){
    const dispatch=useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}