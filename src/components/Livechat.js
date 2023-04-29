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
        <div className="flex flex-col ">
            <h1 className="font-bold mx-2">Livechat</h1>
        <div className="border border-black w-full sm:h-[450px] h-[200px] overflow-y-scroll mx-2 my-2 sm:my-0 bg-slate-50 flex flex-col-reverse">
           {chat?.map((e,i)=> <Chatitem name={e?.name} comment={e?.comment} key={i}/>)}
         
           </div>
             <form  className="w-fit border border-black mx-2">
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