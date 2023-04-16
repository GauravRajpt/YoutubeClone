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
                replies:[{
                  name:"vikash",
                  comment:"you are doing great, keep it up"
                }]
            },
            {
              name:"vishal",
              comment:"very funny",
            }
        ]
    },
    {
        name:"gautam",
        comment:"best perform .",
        replies:[{
          name:'akshay',
          comment:'thank you so much'
        }]
    }
  ]
  
  const Comment=({data})=>{
    const {name, comment, replies}= data;
    return ( <div className=" mb-2  font-semibold bg-gray-150 rounded-lg ">
      <div className="bg-gray-100 rounded-lg p-1 border-l-black border-l-solid border-l-2" >
    <div >{name}</div>
    <div className="font-light">{comment}</div>
    </div>
    <hr className="mx-2"></hr>
    
    {replies? 
   (<div className=" ml-3  bg-gray-100 rounded-lg">
       {replies.map((c)=><Comment data={c}/>)} 
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
