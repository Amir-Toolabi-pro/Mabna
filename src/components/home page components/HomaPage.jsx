import React from 'react';
//components
import HeaderComponent from '../public components/Header';
import ConsultationRequest from './ConsultationRequest';
import ProductsHomePage from './ProductsHomePage';
import CustomersHomePage from './CustomersHomePage';
import FormHomePage from './FormHomePage';
import MabnaHistory from './MabnaHistory';
import MabnaIsDifferent from './MabnaIsDifferent';
import CallMabna from './CallMabna';
import SwiperSlideShow from '../public components/SwiperSlideShow';
import Footer from '../public components/Footer';





const HomePage = () => {


  return ( 
    <>
      <HeaderComponent/>
      <ConsultationRequest/>
      <ProductsHomePage/>
      <CustomersHomePage/>
      <FormHomePage/>
      <MabnaHistory/>
      <MabnaIsDifferent/>
      <CallMabna/>
      <SwiperSlideShow/>
      <Footer/>
    </>
   );
}
 
export default HomePage;