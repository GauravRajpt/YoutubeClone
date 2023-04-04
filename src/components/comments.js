import React from "react";

export default function Comments() {
  const commentsdata = [
    {
        name:"gaurav",
        comment:"can't belive you are still on top .",
        replies:[
            {
                name:"akshay",
                comment:"heheh it's not a big deal .",
            }
        ]
    },
    {
        name:"gaurav",
        comment:"can't belive you are still on top .",
    }
  ]
  
  const Comment=({data})=>{
    const {name, comment, replies}= data;
    return ( <div className="p-2 font-semibold bg-gray-200">
    <div >{name}</div>
    <div className="font-light">{comment}</div>
    
    {replies? 
   (<div className="border-l-black border-solid border-2 m-2">
        <Comment data={replies[0]}/>
    </div>): null}
    
        
  </div>
    )
  }

  return (
    <div className="font-bold">
      comments:

      {
        commentsdata.map((com)=>{
            return(
                <Comment data={com}/>
            )
        })
      }
     
    </div>
  );
}
