//input sibling
export const Sibling1 = ({onChange})=>{
    return (
        <input type="text" onChange={e=>onChange(e.target.value)}/>
    )    
}