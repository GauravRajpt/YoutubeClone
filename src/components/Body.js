import React from 'react'
import '../App.css'
import SideBar from './SideBar'
import Mainsection from './Mainsection'
import { Outlet } from 'react-router-dom'

export default function Body() {
  return (
    <div className=' grid grid-flow-col width-[100%]'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}
