import React, { useState } from "react";


export default function Calculatrice() {
    let [res,setres]=useState("");

    
   const egal = () => {
    try {
      const result = eval(res);
      if (!isFinite(result)) {
        setres("Error");
      } else {
        setres(result);
      }
    } catch (error) {
      setres("Error");
    }
  };

 
  
  const deleteLastCharacter = () => {
    try{
      setres(prevRes => {
        if (typeof prevRes === 'string' && prevRes.length > 0) {
          return prevRes.slice(0, -1); // Remove the last character
        }
        return prevRes; // Return as is if not a string or empty
      });
    }
    catch (error){
      setres("");
    }
  };

   const clear=()=>{
      setres("");
   };

  
  return (
    <div>
      <h1  style ={{color:"#9448F5"}} className="text-center mt-1">Calculator</h1> <br />
      <br />
      <div className="container-fluid mb-5 shadow w-25 justify-content-center rounded py-4 px-1" style={{backgroundColor:"#9448F5"}}>
        <div className="row  mx-4   justify-content-center  mb-3 ">
          <input type="text" value={res} className="col-8 px-4 py-2" style={{backgroundColor: "#96ecd4e2",border:"4px solid #277088de"}} disabled />
          <button onClick={clear} className="col-2 mx-1 p-2 btn btn-light">C</button>
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"%"}  onClick={(e)=>{setres(res + e.target.value)}} className="col-2 mx-1 py-3 px-4 btn btn-light shadow">%</button>
          <button value={"/"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 py-3 px-4 btn btn-light shadow">/</button>
          <button value={"*"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 py-3 px-4 btn btn-light  shadow">*</button>
          <button onClick={deleteLastCharacter} className="col-2 mx-1 p-2 btn btn-light">←</button>
        
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"7"} onClick={(e)=>{setres(res + e.target.value)}}    className="col-2 mx-1 p-3 btn btn-light shadow">7</button>
          <button value={"8"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">8</button>
          <button value={"9"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">9</button>
          <button value={"-"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow" >-</button>
          </div>

        <div className="row my-3 justify-content-center">
          <button value={"4"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow" >4</button>
          <button value={"5"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow" >5</button>
          <button value={"6"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow" >6</button>
          <button value={")"} onClick={(e)=>{setres(res + e.target.value)}} className="col-2 mx-1 p-3 btn btn-light" >  ) </button>
       
        </div>

        <div className="row my-3 justify-content-center">
          <button value={"1"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">1</button>
          <button value={"2"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">2</button>
          <button value={"3"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">3</button>
          <button value={"("}  onClick={(e)=>{setres(res + e.target.value)}} className="col-2 mx-1 p-3 btn btn-light" > ( </button>

          
        </div>
        <div className="row my-3 justify-content-center">
          <button value={"."} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">.</button>
          <button value={"0"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">0</button>
          <button value={"+"} onClick={(e)=>{setres(res + e.target.value)}}  className="col-2 mx-1 p-3 btn btn-light shadow">+</button>
          <button  onClick={egal} className="col-2 mx-1  btn btn-light" style={{ fontSize: "30px", color: "#FF7FAD" }}>=</button>

                 
        </div>
      </div>
    </div>
  );
}
