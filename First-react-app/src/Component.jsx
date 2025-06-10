import React, {useState} from "react";

function MyComponent(){
    // const [name,setName]=useState("Aswathy")
    // let updateName =()=>{
    //     setName("Ashika")
    // }

    // const [n,setN]=useState("Guest")

    // function handleNameChange(e){
    //     setN(e.target.value)
    // }

    // return (
    // <div>
    //     <p>Name:{name}</p>
    //     <button onClick={updateName}>Change Name</button>
    //     <br />
    //     <br />
    //     <input value={n} onChange={handleNameChange} />
    //     <p>Name: {n}</p>
    // </div>
    // )

//     const [car,setCar]=useState({year:2025,
//                                  brand:'Land Rover',
//                                  model:'Defender'
//     })

//     function handleYear(e){
//         setCar({...car,year:e.target.value})
//     }
//     function handleBrand(e){
//         setCar({...car,brand:e.target.value})
//     }
//     function handleModel(e){
//         setCar({...car,model:e.target.value})
//     }

//     return (
//         <div>
//             <p>Your Favorite Car is a: {car.year} {car.brand} {car.model}</p>
//             <br />
//             <input className="car-input"
//                      type="number" value={car.year} onChange={handleYear}/>
//             <br />
//             <input className="car-input"
//                      type="text"  value={car.brand} onChange={handleBrand}/>
//             <br />
//             <input className="car-input"
//                      type="text" value={car.model} onChange={handleModel}/>
//         </div>
//     )
// }
// export default MyComponent



const [car, setCar] = useState({
        year: 2025,
        brand: 'Land Rover',
        model: 'Defender'
    });

    function handleYear(e) {
        setCar({ ...car, year: e.target.value });
    }

    function handleBrand(e) {
        setCar({ ...car, brand: e.target.value });
    }

    function handleModel(e) {
        setCar({ ...car, model: e.target.value });
    }

    return (
        <div className="car-container">
            <p className="car-heading">
                Your Favorite Car is a: {car.year} {car.brand} {car.model}
            </p>

            <label className="car-label">
                Year:
                <input
                    type="number"
                    value={car.year}
                    onChange={handleYear}
                    className="car-input"
                />
            </label>

            <label className="car-label">
                Brand:
                <input
                    type="text"
                    value={car.brand}
                    onChange={handleBrand}
                    className="car-input"
                />
            </label>

            <label className="car-label">
                Model:
                <input
                    type="text"
                    value={car.model}
                    onChange={handleModel}
                    className="car-input"
                />
            </label>
        </div>
    );
}

export default MyComponent;