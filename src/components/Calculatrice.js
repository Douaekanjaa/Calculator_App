import React, { useState } from "react";


export default function Calculatrice() {
    let [res,setres]=useState("");

    
    const egal=()=>{
      setres(eval(res));
   };
   const clear=()=>{
      setres("");
   };

  
  return (
    <div>
      <h1  style ={{color:"#8338ec"}} className="text-center my-1">Calculator</h1> <br />
      <br />
      <div className="container-fluid w-25 justify-content-center border border-1 border-dark rounded py-4 px-1" style={{backgroundColor:"#cfbaf0"}}>
        <div className="row  mx-4  my-1 justify-content-center  mb-5 ">
          <input type="text" value={res} className="col-8 px-4 py-2" disabled />
          <button onClick={clear} className="col-2 mx-1 p-2 btn btn-light">C</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"%"}  onClick={(e)=>{setres(res + e.target.value)}} className="col-2 mx-1 py-3 px-4 btn btn-light">%</button>
          <button value={"/"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 py-3 px-4 btn btn-light">/</button>
          <button value={"*"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 py-3 px-4 btn btn-light">*</button>
          <button value={"+"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">+</button>
        
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"7"} onClick={(e)=>{setres(res + e.target.value)}}    className="col-2 mx-1 p-3 btn btn-light">7</button>
          <button value={"8"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">8</button>
          <button value={"9"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">9</button>
          <button value={"-"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light" >-</button>
          </div>

        <div className="row my-3 justify-content-center">
          <button value={"4"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light" >4</button>
          <button value={"5"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light" >5</button>
          <button value={"6"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light" >6</button>
          <button  onClick={egal} className="col-2 mx-1 p-3 btn btn-light">=</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"1"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">1</button>
          <button value={"2"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">2</button>
          <button value={"3"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">3</button>
          <button value={"0"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light">0</button>
          
        </div>
      </div>
    </div>
  );
}
