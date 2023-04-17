import { useEffect } from "react";
import Chatitem from "./Chatitem";
import { useDispatch, useSelector } from "react-redux";
import { addchat } from "./Store/ChatSlice";
import { generateName } from "./helper";

const Livechat=()=>{
    const chat= useSelector((state)=>state.chat)
    console.log(chat)
    
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
        <div className="border border-black w-full h-[450px] overflow-y-scroll mx-2 bg-slate-50 flex flex-col-reverse">
           {chat?.map((e)=> <Chatitem name={e?.name} comment={e?.comment}/>)}
           </div>
    )
}
export default Livechat;