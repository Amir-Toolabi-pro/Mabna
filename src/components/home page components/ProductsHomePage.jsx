import React from 'react';

import "../../styles/ProductsHomePage.css"


const ProductsHomePage = () => {
  return (
    <>
      <div className="products_homepage">
        <h3>در هر حوزه مالی که فعالیت می‌کنید</h3>
        <p>محصولی &nbsp;مختص &nbsp;شما &nbsp;داریم</p>
        <div className='products_list_button'>
          <ul>
            <li>سبد گردانی</li>
            <li>کارگزاری</li>
            <li>پردازش اطلاعات مالی</li>
            <li>صندوق سرمایه گذاری</li>
            <li>شرکت سرمایه گذاری</li>
          </ul>
        </div>
        <div className="products_cards">
          <a href="#"  className="card">
              <div className='imgbgc'>
                <div className='img_holder'>
                  <img src="https://mabnadp.com/_next/static/media/rahavard365.f6f28db5.svg" alt="" />
                </div>
              </div>
              <h4>ره آورد</h4>
              <p>مرجع اطلاعات و تحلیل بازار های مالی</p>
          </a>
          <a href="#"  className="card">
              <div className='imgbgc'>
                <div className='img_holder'>
                  <img src="https://mabnadp.com/_next/static/media/vasam.c7bc6308.svg" alt="" />
                </div>
              </div>
              <h4>داهی</h4>
              <p>نرم افزار معاملات الگوریتمی</p>
          </a>
          <a href="#"  className="card">
              <div className='imgbgc'>
                <div className='img_holder'>
                  <img src="https://mabnadp.com/_next/static/media/rahavard-novin-3.6a5d286e.svg" alt="" />
                </div>
              </div>
              <h4>ره آورد نوین</h4>
              <p>بانک اطلاعاتی و ابزار تحلیل</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductsHomePage;