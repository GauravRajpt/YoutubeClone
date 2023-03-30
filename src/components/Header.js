import React, { useState } from "react";
import menuimg from "../images/icon.png";
import logo from "../images/youtube.png";
import "../App.css";
import profile from "../images/profile.jpg";
import { useDispatch } from "react-redux";
import { isMenuopen } from "./Store/MenuSlice";
import { json, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {


    const [searchquery, setSearchQuery]= useState("api")
    const [search, setsearch]= useState("hello")
  const dispatch = useDispatch();
  function handleclick() {
    dispatch(isMenuopen());
  }
 async function getData(){
    const data= await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchquery);
   const json=  await data.json();
    console.log(json[1]?.[1])
    setsearch(json[1])
  }
  useEffect(()=>{
     const timer= setTimeout(() => {
      getData();
     },200);
    
     return ()=>clearTimeout(timer)
  },[searchquery]);
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="flex items-center cursor-pointer">
          <img
            onClick={() => handleclick()}
            className="h-6"
            src={menuimg}
            alt="menu.jpg"
          />
        </div>
        <div className="flex items-center">
          <Link to="/">
            <img className="h-12 mx-4 cursor-pointer" src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="flex items-center w-[30%] relative">
        <input
          className=" p-2 h-9 rounded-l-full border-gray-300 border-solid border w-[100%]"
          type="text"
          
          onChange={(e)=>setSearchQuery(e.target.value)}
             />
             <div className="absolute top-12 left-0 bg-white w-[100%] rounded-xl shadow-2xl list-none p-2 ">
              {search.map((e)=><li key={e} className="hover:bg-gray-100 cursor-pointer">{e}</li>)}
              
              
             </div>
        <svg
          className=" cursor-pointer w-12 border-gray-300 border-solid border rounded-r-full h-9 bg-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g data-name="Layer 2">
            <path
              d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
              data-name="search"
            />
          </g>
        </svg>
      </div>
      <div>
        <img className="h-14 cursor-pointer" src={profile} alt="" />
      </div>
    </div>
  );
}
/**useeffect
 *  [searchquery]
 * settimeout,300ms
 *  getData
 *  - searchquery
 *      - setsearchquery(value); 
 * 
 * 
 * 
 * 
 */