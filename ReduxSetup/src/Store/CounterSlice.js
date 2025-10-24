import {createSlice} from '@reduxjs/toolkit'

const CounterSlice =  createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        inc:(state)=>{state.value+=1},
        dec:(state)=>{state.value-=1},
        reset:(state)=>{state.value=0},
        incBy:(state,action)=>{state.value +=action.payload}
    }
})

export const {inc,incBy,dec,reset} = CounterSlice.actions
export default CounterSlice.reducer