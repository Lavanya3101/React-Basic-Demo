const intialState={count:0};
const counterReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1};
            case 'decrement':
                return {...state,count:state.count-1};
                default:
                    return state;
    }
}
export default counterReducer;