import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function SideBar() {
    const menu= useSelector((state)=>state.menu)
    console.log(menu)

    if(menu){
  return (
    <div className='col-span-1 flex flex-col w-fit absolute top-0 left-0 sm:relative bg-white bg-opacity-80 rounded-md sm:bg-opacity-1' > 
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'><Link to="/">Home</Link></li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>Shorts</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer '>Subscriptions</li>
        <hr className='border-b-black-100 border  hover:bg-gray-100  inline-block w-bordere-solid   cursor-pointer '/>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>Library</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>History</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>Your videoes</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>Download</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>your Clips</li>
        <li className='font-roboto  list-none hover:bg-gray-100 rounded-lg leading-10 inline-block w-[100%] cursor-pointer'>Show more</li>
         
    </div>
  )}
  else {
    return null;
  }
}
