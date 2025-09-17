import {configureStore} from '@reduxjs/toolkit'
import reducerT from './reducer'

const store=configureStore({
    reducer:reducerT
})

export default store