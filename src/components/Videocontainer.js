import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function Videocontainer() {

  const [data, setdata]=useState(null)
    
    
   
    useEffect(()=>{
        getVideos()
        async function getVideos(){
            const data= await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2CcontentDetails&chart=mostPopular&&maxResults=30&regionCode=in&key=AIzaSyDKAZyQIg6e-73pKItOV4Yq91GhpYI1Vp4")
            const jsonn= await data.json();
            
            setdata(jsonn)
            
        }
    
    },[]);

   
  return (
    <div className='flex flex-wrap  sm:m-3   w-full '>
      { data?.items.map((items)=>{
        return (<Link to={"/video?v="+items.id} key={items.id} className='w-full sm:w-52 sm:m-3'>
          <div className='w-full sm:w-52 m-0 sm:m-3 cursor-pointer'>
          <img className="w-full rounded-lg" src={items?.snippet?.thumbnails?.medium?.url} alt=""/>
          <h2 className='font-Roboto font-medium text-sm'>{items?.snippet?.title.substring(0,50)}{items?.snippet?.title?.length>50?<span>...</span>:null}</h2>
         
          <h2 className='text-sm'>{items?.snippet?.channelTitle}</h2>
           <h3 className='text-sm'>{items?.statistics?.viewCount} views</h3>
        </div></Link>)
})}
    </div>
  )
}
