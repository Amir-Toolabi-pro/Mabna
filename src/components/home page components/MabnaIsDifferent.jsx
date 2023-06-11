import React from 'react';

import "../../styles/MabnaIsDifferent.css"


const MabnaIsDifferent = () => {
  return ( 
    <>
      <div className="different">
        <h3>مبنا متمایز است</h3>
        <div className="different_holder_cards">
          <div className="different_card_mabna">
            <div className="card_info">
              <img src="https://mabnadp.com/_next/static/media/Infrastructure.651b25e0.svg" alt="" />
              <strong>زیرساخت قدرتمند</strong>
            </div>
          </div>
          <div className="different_card_mabna">
            <div className="card_info">
              <img src="https://mabnadp.com/_next/static/media/CoreUsers.cf75e70f.svg" alt="" />
              <strong>از کاربر تا هسته معاملات</strong>
            </div>
          </div>
          <div className="different_card_mabna">
            <div className="card_info">
              <img src="https://mabnadp.com/_next/static/media/FinancialMarkets.cf5963b3.svg" alt="" />
              <strong>ارائه خدمات جامع بازارهای مالی</strong>
            </div>
          </div>
          <div className="different_card_mabna">
            <div className="card_info">
              <img src="https://mabnadp.com/_next/static/media/Pricing.820d4831.svg" alt="" />
              <strong>قیمت‌گذاری منعطف</strong>
            </div>
          </div>
        </div>
      </div>
    </>
   );
}
 
export default MabnaIsDifferent;