// import Header from "./header"
// import Footer from "./Footer";
// import Food from "./Food";
// import Card from "./card";
// // import Button from "./buttons/button";
// import Button2 from "./bt2";
// import Student from "./Student";
// import profileImage1 from './assets/1.png'
// import profileImage2 from './assets/2.png'
// import profileImage3 from './assets/3.png'
// import UserGreeting from "./userGreet";
// // import List from "./LIST";
// import Button from "./Button";
// import MyComponent from "./Component"
// import NewComponent from "./Cars"
// import Counter from "./useEff"

// function App() {
// // return(
// //   // <>
// //   // <Header></Header>
// //   // <Food></Food>
// //   // <Food/>
// //   // <Footer/>
// //   // </>
// //   <>
// //   {/* <Card/> */}
// //   {/* <Button/>
// //   <Button2/> */}

// // {/*   
// // <div className="container">
// // <Student name="Ashika" age={22} standard={12} isStudent={true ? "Yes" : "No"} img={profileImage1}/>
// // <Student name="Devan" age={26} standard={12} isStudent={true ? "Yes" : "No"} img={profileImage2}/>
// // <Student name="Aswathy" age={22} standard={12} isStudent={true ? "Yes" : "No"} img={profileImage3}/>  
// // </div>   */} 
// //   </>

// // ////////////////////////////////////
// {/* <>
// <UserGreeting isLogged={true} name="Belwin"/>
// <UserGreeting isLogged={false} name="Belwin"/>
// </> */}
// // =======================================



// // );
// }

// import ProfileCard from "./workoutOne"
// import "./workoutOne.css"
// export default function App(){
//   let data=[
//     {id:1,name:"Leaanne Graham",email:"leannegraham@abc.com"},
//     {id:2,name:"Ervin Howell",email:"ervinhowell@abc.com"}
//   ]
//   return(
// <>
//  <div className="app"> 
//       {data.map((user)=>(
//         <ProfileCard key={user.id} name={user.name} email={user.email}/>
//       ))}
//   </div>
// </>
// )
// }

    {/* <List /> */}
    {/* <Button/> */}
    {/* <MyComponent/> */}

    {/* <NewComponent/> */}
    {/* <Counter/> */}

// import "./Counter.css"
// import React ,{useState} from "react"
// export default function App(){
//   const [count,setCount]=useState(0)

//   function IncreaseCount(){
//     setCount(c=>c+1)
//   }
//   function DecreaseCount(){
//     setCount(c=>c-1)
//   }

//   return (
//     <div className="counter">
//       <h4>Simple Counter</h4>
//       <h2>{count}</h2>
//       <div className="btns">
//         <button onClick={DecreaseCount}>-</button>
//         <button onClick={IncreaseCount}>+</button>
//       </div>
//     </div>
//   )

// }
//////////////////////////////////

import React,{useState,useRef,useEffect} from "react";
export default function App(){
  const [name,setName]=useState("")
      let inputRef =useRef(null)

    useEffect(()=>{
      inputRef.current.focus()
    },[])

    let handleChange =(e)=>{
      setName(e.target.value)
    }
    let handleSubmit=(e)=>{
      e.preventDefault()

      if(name.trim()==""){
        alert("Name Cannot be Empyt")
        inputRef.current.focus()
        return
      }
      console.log("Submitted Name is :",name);
      setName("")
      
    }
    return(
      <form onSubmit={handleSubmit}>
        <label> Enter Name: </label>
        <input type="text" value={name} onChange={handleChange} ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    )
}