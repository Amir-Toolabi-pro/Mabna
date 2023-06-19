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
              <p className='strong'>۳۳+</p>
              <p>سال اطلاعات بازار سرمایه</p>
            </div>
            <div className="history_list_item">
              <p className='strong'>۷۰۰+</p>
              <p>مشتری فعال حقوقی</p>
            </div>
            <div className="history_list_item">
              <p className='strong'>۲,۰۰۰,۰۰۰+</p>
              <p>کاربر حقیقی</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MabnaHistory;