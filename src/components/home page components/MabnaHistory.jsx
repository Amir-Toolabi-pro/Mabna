import React from 'react';

import "../../styles/MabnaHistory.css"



const MabnaHistory = () => {
  return (
    <>
      <div className='history'>
        <div className="history_holder">
          <div className="history_head">
            <h3>ما در این بازار قدیمی‌ترینیم</h3>
            <p>نزدیک به سه ‌دهه روی لبه فناوری</p>
          </div>
          <div className="history_list">
            <div className="history_list_item">
              <span>۳۳+</span>
              <p>سال اطلاعات بازار سرمایه</p>
            </div>
            <div className="history_list_item">
              <span>۷۰۰+</span>
              <p>مشتری فعال حقوقی</p>
            </div>
            <div className="history_list_item">
              <span>۲,۰۰۰,۰۰۰+</span>
              <p>کاربر حقیقی</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MabnaHistory;