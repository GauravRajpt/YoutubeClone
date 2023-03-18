import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Cart from './components/Cart';



const approuter= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/',
        element:<Body/>
      }
    ]
  },
  
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={approuter}/>
   
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
