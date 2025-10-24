const initial={value:''}
function ReducerFunction(state=initial,action){
    switch(action.type){
        case 'Update_value':
            return {...state,value:action.payload}
        default:
            return state;
    }
}

export default ReducerFunction