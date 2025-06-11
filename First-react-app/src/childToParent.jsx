export default function  Parent() {
    const [mes,setMes]=useState('')
    const handleChild=(data)=> {
        setMes(data)
    }
    return (
        <>
            <Child sentData={handleChild}/>
            <p>message from child {mes}</p>
        </>
       
        )
}
function Child({sentData}) {
    return(
        <button onClick={()=>sentData("hello ")}>sent</button>
    )
}
