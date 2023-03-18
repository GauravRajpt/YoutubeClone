import React from 'react'
import { useSelector } from 'react-redux'
import { removeItem } from './store/Cartslice'
import { useDispatch } from 'react-redux'

export default function Cart() {
  const cart= useSelector((state)=>state.cart)
  const dispatch= useDispatch();
  function handleclick(item){
    dispatch(removeItem(item.id))
  }
  console.log(cart)
  return (
    <>
    <h1>Cart</h1>
      <div className='ecomerceSTore'>
       
        {cart.map((item)=>{
          return (
            <div className='product' key={item.id}>
              <img src={item.image} alt=""/>
              <h1>{item.title}</h1>
              <h2>{item.price}</h2>
              <button className='btn' onClick={()=>handleclick(item)}>Remove</button>
            </div>
            
          )
        })
        
      }
      </div>
       
      </>
      
  )
}
