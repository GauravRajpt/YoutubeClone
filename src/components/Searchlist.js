import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Searchlist() {

    const searchlist= useSelector((state)=>state?.searchlist?.items)
    
    if(searchlist){
      localStorage.setItem('searchdata',JSON.stringify(searchlist));
     
    }
  const data= localStorage.getItem('searchdata')
  const searchdata= JSON.parse(data);
  
    
    
  return (
    <div>
    {searchdata?.map((e)=>{
      return (
        
     <Link to={"/video?v="+e?.id?.videoId}>
      <div className='flex w-[90%] col-span-10 m-4 cursor-pointer'>
      <img className="w-80 h-52 rounded-lg"src={e?.snippet?.thumbnails?.medium?.url} alt="" />
      <div className='m-2'>
        <h1 className=' font-roboto text-xl'>{e?.snippet?.title}</h1>
        <h2 className='pt-3 '>{e?.snippet?.channelTitle}</h2>
        <h2 className='pt-3 font-light text-sm'>{e?.snippet?.description}</h2>
      </div>
      
    </div>
    </Link>)
    })}
    </div>
    
  )
}
