import { Provider, useDispatch, useSelector } from 'react-redux'
import { setMes, store } from './Store/MessageStore'

function A(){
    const dispatch =  useDispatch()
    return <button onClick={()=>dispatch(setMes('this is the message'))}>sent</button>
}

function B(){
    const mes=useSelector((s)=>s.mes)
    return <h1>{mes}</h1>
}

const Parent = () => {
  return (
    <Provider store={store}>
        <A/>
        <B/>
    </Provider>
  )
}

export default Parent