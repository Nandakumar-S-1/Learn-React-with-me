import {configureStore,createSlice} from '@reduxjs/toolkit'

const messgeSlice = createSlice({
    name:'mes',
    initialState:'',
    reducers:{
        setMes:(state,action)=>action.payload
    }
})

export const {setMes} = messgeSlice.actions
export const store = configureStore({reducer:{mes:messgeSlice.reducer}})