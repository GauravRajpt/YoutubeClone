
import './App.css';
import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';


function App() {
 
 
  return (
    <div className="App">
      <Provider store={store}>
      <Header/>
      <Outlet/>
      </Provider>
        
      
    </div>
  );
}

export default App;
