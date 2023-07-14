import React, { useState } from 'react';


import "../../styles/login.css"
import { useNavigate } from 'react-router-dom';



const Login = () => {

  const [getNumber, setGetNumber] = useState("");
  let validate = false
  const navigate = useNavigate();
  if (getNumber !== "" && getNumber.startsWith("09") && getNumber.length == 10) {
    validate = true
  }else{
    validate = false
  }


  return (
    <>
      <div className="login_content">
        <div className="login_get_num">
          <div className="login_icon">
            <img src="https://my.mabnadp.com/_next/static/media/logo.5421f771.svg" alt="" />
            <p>سامانه امور مشتریان مبنا</p>
          </div>
          <form action="">
            <span>
              ثبت نام / ورود
            </span>
            <div className='inputnum_holder' >
              <span>شماره موبایل خود را وارد کنید.</span>
              <input
                value={getNumber}
                onChange={(event) => {
                  setGetNumber(event.target.value);
                  console.log(getNumber);
                  console.log(validate);
                }}
                type="number"
                placeholder='به طور مثال ۰۹۱۲۰۰۰۰۰۰۰'
              />
            </div>
            <button
              disabled={validate ? true : false}
              onClick={() => {
                localStorage.setItem('userNumber' , getNumber)
                navigate("/")
              }}
            >ادامه</button>
          </form>
        </div>

        <div className="login_bgi">

        </div>
      </div>
    </>
  );
}

export default Login;