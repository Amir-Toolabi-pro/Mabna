import React from 'react';

// imported components
import HomePage from './components/home page components/HomaPage';

// router
import { Routes , Route } from 'react-router-dom';
import Login from './components/public components/Login';
import LoginPassword from './components/public components/loginPassword';
import WellcomePage from './components/public components/WellcomePage';


const AllComponents = () => {
  return ( 
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loginPass' element={<LoginPassword/>} />
      <Route path='/WellcomePage' element={<WellcomePage/>} />
    </Routes>
    </>
   );
}
 
export default AllComponents;