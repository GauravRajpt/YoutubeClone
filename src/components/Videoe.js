import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./Store/MenuSlice";
import Comments from "./comments";
import Livechat from "./Livechat";

export default function Videoe() {


console.log(window.screen.width)
  const dispatch= useDispatch();
  dispatch(closeMenu());
  const [searchparam]= useSearchParams();
console.log(searchparam.get("v"))
  return (
    <div className="col-span-12">
     
     <div className="sm:flex">
      <div className="sm:w-[900px] m-3 sm:m-0 "><iframe
        width="100%"
        className="sm:h-[450px] h-56"
        src={"https://www.youtube.com/embed/"+searchparam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      </div>
      <Livechat />
      </div> 
      <Comments />
    </div>
  );
}
