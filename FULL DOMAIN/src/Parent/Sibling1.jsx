export const Sibling1 = ({onChange})=>{
    <input type="text" onChange={e=>onChange(e.target.value)}/>
}