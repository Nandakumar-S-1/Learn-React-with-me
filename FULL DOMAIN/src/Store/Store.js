import {configureStore} from '@reduxjs/toolkit'
import ReducerFunction from './reducer/reducer'


const store = configureStore({
    reducer:{
        value:ReducerFunction
    }
})

export default store