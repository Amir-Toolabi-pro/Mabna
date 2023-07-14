import React, { useEffect, useState } from 'react';

import "../../styles/WellcomePage.css"
import { useNavigate } from 'react-router-dom';

const WellcomePage = () => {

  const [userInfo, setUserInfo] = useState({})
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [validate, setValidate] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setName(localStorage.getItem('userName'));
    setNumber(localStorage.getItem('userNumber'));
    setPassword(localStorage.getItem('userPassword'));
    const { ...userInfo } = {
      fullName: name,
      phone: number,
      password
    }
    setUserInfo(userInfo)
  }, [])

  return (
    <>
      <div className='wllcome_container' >
        <p>من {userInfo.fullName} هستم با شماره تلفن: {userInfo.phone}</p>
        <p className='agree' >
          مشخصات فوق را تایید میکنید؟
          <input type="checkbox"
            onClick={(e)=>{
              if(e.currentTarget.checked){
                setValidate(true)
              }else{
                setValidate(false)
              }
              console.log(validate);
              console.log(userInfo);
            }}
          />
        </p>
        <div className='wellcome_btn'>
          <button
            style={validate? {cursor:"pointer"} :{cursor:"not-allowed"} }
            disabled = {validate? false : true}
            onClick={() => {
              navigate("/")
            }}
          >
            تایید
          </button>
        </div>
      </div>
    </>
  );
}

export default WellcomePage;