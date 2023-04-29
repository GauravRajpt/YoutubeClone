import React, { useRef, useState } from "react";
import menuimg from "../images/icon.png";
import logo from "../images/youtube.png";
import "../App.css";
import profile from "../images/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { isMenuopen } from "./Store/MenuSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { storeCache } from "./Store/SearchSlice";
import Searchlist from "./Searchlist";
import { searchlistdata } from "./Store/searchlistslice";


export default function Header() {
  const [showsuggestions, setshowsuggestions] = useState(false);
  const [searchquery, setSearchQuery] = useState("");
  const [search, setsearch] = useState(null);
  const dispatch = useDispatch();
  const searchstore = useSelector((state) => state.search);
  const searchref= useRef();
  const searchinput=useRef()

  function handleclick() {
    dispatch(isMenuopen());
  }
  async function getData() {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchquery
    );
    const json = await data.json();
    console.log(json[1]?.[1]);
    setsearch(json[1]);
    dispatch(storeCache({ [searchquery]: json[1] }));
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchquery in Object(searchstore)) {
        setsearch(searchstore[searchquery]);
      } else getData();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const searchlist = async (e) => {
    
    setshowsuggestions(false)
    console.log(4);
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=" +
        e +
        "&key=AIzaSyDKAZyQIg6e-73pKItOV4Yq91GhpYI1Vp4"
    );
    const json = await data.json();
    
    dispatch(searchlistdata(json));
    
  };

  function handlesearch(event){
    
if(!searchref?.current?.contains(event.target) && !searchinput?.current.contains(event.target)){
  
 setshowsuggestions(false);
}
  }
  useEffect(()=>{
    document.addEventListener('click',handlesearch)
   
    return ()=>{
      document.removeEventListener('click',handlesearch)
    }
  },[])
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="flex items-center cursor-pointer relative">
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
      <div  ref={searchinput}  onFocus={() => setshowsuggestions(true)} className="flex items-center w-[30%] relative">
        <input
          className=" p-2 h-9 rounded-l-full border-gray-300 border-solid border w-[100%]"
          type="text"
          
    
          
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {showsuggestions && (
          <div
         
          
             ref={searchref}
           
            className="absolute top-12 left-0 bg-white w-[100%] rounded-xl shadow-2xl list-none p-2 "
          >
            {search?.map((e) => (
             <Link to="/searchlist" key={e}><li
            
              onFocus={() => setshowsuggestions(true)}
                onClick={() => searchlist(e)}
                
                className="hover:bg-gray-100 cursor-pointer p-2 rounded-lg"
              >
                {e}
              </li>
              </Link> 
            ))}
          </div>
        )}
       <Link to={"/searchlist"}
      > 
      <div onClick={()=>searchlist(searchquery)}><svg
    
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
        </Link>
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
