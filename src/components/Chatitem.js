import React from 'react' 
import profile from '../images/profile.jpg'

export default function Chatitem({name, comment}) {
  return (
    <div className='flex m-1 '>
       <img className="h-7 cursor-pointer" src={profile} alt="" />
        <h2 className='mr-2 font-bold'>{name}</h2>
        <h3>{comment}</h3>
    </div>
  )
}
