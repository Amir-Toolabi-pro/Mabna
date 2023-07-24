import React from 'react';

import style from "../../styles/FormHomePage.module.css"

const FormHomePage = () => {
  return (
    <>
      <div className={style.form_home}>
        <div className={style.form_home_holder}>
          <div className={style.get_counseling}>
            <h3>برای دریافت مشاوره، فرم را پر کنید تا همکاران ما با شما تماس بگیرند:</h3>
            <form action="">
              <div className={style.name_num}>
                <div className={style.form_home_items}>
                  <p>نام و نام خانوادگی</p>
                  <input type="text" placeholder='نام و نام خانوادگی' />
                </div>
                <div className={style.form_home_items}>
                  <p>شماره موبایل</p>
                  <input className={style.getnumber} type="number" placeholder='۰۹۱۲۱۲۳۴۵۶۷' />
                </div>
              </div>
              <div className={style.form_home_items}>
                <p>نام شرکت</p>
                <input type="text" placeholder='پردازش اطلاعات مالی مبنا' />
              </div>
              <div className={style.form_home_items}>
                <p>انتخاب زمان مناسب برای تماس با شما</p>
                <div>
                  <span>زمان مورد‌نظر خود را انتخاب کنید.</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="#BCBCBC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
              </div>
              <div className={style.get_counseling_btn}>
                <button>ارسال</button>
              </div>
            </form>
          </div>
          <div className={style.form_home_img}>

          </div>
        </div>
      </div>
    </>
  );
}

export default FormHomePage;