import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "./Store/MenuSlice";
import Comments from "./comments";
import Livechat from "./Livechat";

export default function Videoe() {



  const dispatch= useDispatch();
  dispatch(closeMenu());
  const [searchparam]= useSearchParams();
console.log(searchparam.get("v"))
  return (
    <div className="col-span-12">
     
     <div className="flex">
      <div className="w-[900px]"><iframe
        width="900"
        height="450"
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
