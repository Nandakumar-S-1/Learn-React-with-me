// function List(){
//     let Brands = [
//   {id:1, name: "Mercedez", country: "Germany" },
//   {id:2, name: "Audi", country: "Germany" },
//   {id:3, name: "BMW", country: "Germany" },
//   {id:4, name: "Volvo", country: "Sweden" },
//   {id:5, name: "Lamborgini", country: "Italy" },
//   {id:6, name: "VolksWagen", country: "Germany" },
//    {id:7, name: "VolksWagen", country: "Germany" }
// ];

    
//     // let resArr = Brands.map(brand=><li className="lis">{brand.name}, ({brand.country})</li>)
//     //set the brand name as key

//     // let resArr =Brands.map(brand=> <li key={brand.name}>{brand.name}</li> )
    
//     //to make sure that the key should not contain duplicates, because names can be repeated, we can give id

//     Brands.sort((a,b)=>a.name.localeCompare(b.name))



//     let resArr=Brands.map(brands=> 
//                     <li key={brands.id}> {brands.name}: &nbsp;  
//                     <b>{brands.country}</b> 
//                     </li> )

//     return( 
//     <>
//         <h3>{}</h3>
//         <ol >{resArr}</ol>    
//     </>
//  )

// }
// export default List

