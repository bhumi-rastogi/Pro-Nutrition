import React from "react";

export default function searchBox(props){
  return(
    <>
      <h3 style={{marginLeft:'110px',fontSize:'30px'}}>
        Search
      </h3>
      
      <input onChange={e=>{props.handleSearch(e)}}  type="search"style={{borderColor:'black',marginLeft:'110px',marginBottom:'25px'}}>

      </input>
    </>
  )
}