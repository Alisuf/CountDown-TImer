import React, {useEffect, useState } from "react";
const Counter = () =>
{
  const [value,setValue]=useState(0)
  useEffect(()=>{
    console.log('Welcome')
  },[])

 const today = new Date()
  useEffect(()=>{
    console.log('value change')
  },[value]) 
  return (
    <div>
    <button className="button" onClick={ () => setValue(value+1)}>+ </button>
    <span className="count"> {value}</span>
     <button className="button" onClick={ () => {
       if(value>0){setValue(value-1)
       }}}>-</button>
       <div className="count">{
 JSON.stringify(today)}</div>
 </div>
  );
       };
export default Counter ;