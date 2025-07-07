import React,{useState} from "react";

function NewComponent(){
    const [cars,setCars]=useState(["G-Wagon","Defender","Wrangler"])

    function AddNewCar(){
        const newCar=document.getElementById("carInput").value;
        document.getElementById("carInput").value=""

        setCars(c=>[...c,newCar])
    }
    function RemoveCar(index){
        setCars(cars.filter((_ ,i)=>i!==index))
    }
    return (
        <div>
            <h2><u>The Off Roaders </u></h2>
            <ul>
                {cars.map((car,index)=> <li key={index} onClick={()=>RemoveCar(index)}>
                                            {car}</li> )}
            </ul>
            <input type="text" id="carInput" placeholder="Enter Car Name"/>
            <button onClick={AddNewCar}>Add</button>
        </div>
    )
}
export default NewComponent