import { useEffect, useState } from "react";
import Chatitem from "./Chatitem";
import { useDispatch, useSelector } from "react-redux";
import { addchat } from "./Store/ChatSlice";
import { generateName } from "./helper";

const Livechat=()=>{
    const [livemessage,setLivemessage]= useState("");
    
    const chat= useSelector((state)=>state.chat)
    
    
    const dispatch= useDispatch()
    useEffect(()=>{
       const i= setInterval(()=>{
           
        dispatch(addchat( {
            name:generateName(),
            comment:"lorem ipsum teri bolkh atem😁"
        }))

        },500)
        return ()=>clearInterval(i);
    },[])
    return (
        <div className="flex flex-col">
        <div className="border border-black w-full h-[450px] overflow-y-scroll mx-2 bg-slate-50 flex flex-col-reverse">
           {chat?.map((e,i)=> <Chatitem name={e?.name} comment={e?.comment} key={i}/>)}
         
           </div>
             <form  className="w-full border border-black mx-2">
             <input className="  w-80 " type="text" value={livemessage} onChange={(e)=>setLivemessage(e.target.value)}/>
             <button onClick={(e)=>{
                e.preventDefault();
                dispatch(addchat({
                name:"Gaurav",
                comment:livemessage,
             }))
                setLivemessage("")}
             } className="bg-green-100 border border-l-black">Send</button>
            </form>
            </div>
    )
}
export default Livechat;