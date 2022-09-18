// import react, { useEffect, useState } from 'react';

// function Aryan(){

//     const [Initial,setInitial] = useState();
//     const [Searchtext, setSearchtext] = useState("");
//     useEffect(()=>{
//         let url = "https://gorest.co.in/public/v2/users";
//         function FetchInivialData(){
//             fetch(url).then((response)=>response.json()).then(data=>setInitial(data)).catch(error=>console.log(error));
//         }
//         FetchInivialData()

//     },[])

//     console.log("initialll",Initial);

//     const handleSearchChange = (e) => {
//         setSearchtext(e.target.value);
//       };


//     const filtered = !Searchtext
//     ? Initial
//     : Initial.filter((person) =>
//         Searchtext.toLowerCase().includes(person.name.toLowerCase())
//       );

//     console.log("filter",filtered);

    
//     return (
//         <>
//         <div>
//         <h1>Hello People</h1>
//         </div>
//         <div style={{marginTop:"100px",display:"flex",justifyContent:"center"}}>
//             <input value={Searchtext} onChange={(e)=>handleSearchChange(e)}></input>
//         </div>
//         <div>
//                     { 
//                         filtered.map((person) => {
//                         return (
//                         <p>
//                             {person.name} 
//                         </p>
//                         );
//                         })
//                     }
                    
                
//         </div>


//         </>
//     )
// }

// export default Aryan;