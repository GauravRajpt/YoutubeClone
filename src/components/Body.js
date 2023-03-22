import React from 'react'
import '../App.css'
import SideBar from './SideBar'
import Mainsection from './Mainsection'

export default function Body() {
  return (
    <div className=' grid grid-flow-col width-[100%]'>
      <SideBar/>
      <Mainsection/>
    </div>
  )
}
