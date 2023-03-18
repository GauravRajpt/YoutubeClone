import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useSelector } from 'react-redux'



export default function Header() {

  const cart= useSelector((state)=>state.cart)
  console.log(cart)
  return (
    <div className='header'>
        <li className='nav-item'><Link to="/"> HOME</Link>  </li>
        <li className='nav-item'>About</li>
        <li className='nav-item'><Link to="/cart" >cart</Link></li>
        <li className='nav-item'>cart-item {cart.length}</li>
        </div>
  )
}
