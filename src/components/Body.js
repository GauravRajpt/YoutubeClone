import React, { useEffect, useState } from 'react'
import '../App.css'
import { additem } from './store/Cartslice';
import { useDispatch } from 'react-redux';

export default function Body() {
const [product, setProduct]= useState(null);
  const dispatch = useDispatch();
  function handleclick(item){
    dispatch(additem(item))
  }
  useEffect(()=>{
    async function getdata(){
      const data= await fetch('https://fakestoreapi.com/products');
      const res=  await data.json()
      console.log(res);
      setProduct(res);
      
    };
    getdata();
    
  },[]
  );
  
  return (
    <div>
        <div className='ecomerceSTore'>
          {product && product.map((item)=>{
           return (<div className='product' key={item.id} >
           <img src={item.image} alt="imagej" />
           <h1>{item.title}</h1>
           <h2>{item.price}</h2>
           <button 
onClick={()=>handleclick(item)}
className="btn">Add to cart</button>
           </div>
           )
          }) }
          
        </div>
    </div>
  )
}
