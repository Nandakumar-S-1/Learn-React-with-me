import UseToggle from "../UseToggle";

export default function ToggleUse(){
    const [isOn,setIsOn] = UseToggle()
    return(
        <button onClick={setIsOn}>
            {isOn?'On':'Off'}
        </button>
    )
}