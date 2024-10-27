const intialState={counter:0};

const counterReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'INC_COUNTER':
            return {...state,counter:state.counter+1}
            case 'DEC_COUNTER':
                return {...state,counter:state.counter-1}
                default : return state;
    }
}

export default counterReducer;