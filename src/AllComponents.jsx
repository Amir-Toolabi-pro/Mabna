import React from 'react';

// imported components
import HomePage from './components/home page components/HomaPage';

// router
import { Routes , Route } from 'react-router-dom';
import Login from './components/public components/Login';


const AllComponents = () => {
  return ( 
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
   );
}
 
export default AllComponents;