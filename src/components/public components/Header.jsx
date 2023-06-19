import React from 'react';
//router
import { NavLink } from 'react-router-dom';
//style
import "../../styles/header.css"


const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="header_container">
          <div className='ham_menu' >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="logo_and_navbar">
            <div className='logo'>
              <img src="https://mabnadp.com/_next/static/media/mabna-logo-40-40.d9957e41.svg" alt="" />
            </div>
            <div className='logo_phone'>
              <img src="https://mabnadp.com/_next/static/media/mabna-logo-text.698569fc.svg" alt="" />
            </div>
            <div className='navbar'>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to={"a"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "2px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      خانه
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"b"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? " 3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      محصولات
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"c"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      فرصت های شغلی
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"d"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      درباره مبنا
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"e"}
                      style={
                        ({ isActive }) => {
                          return {
                            color: isActive ? "#00b24a" : "#fff",
                            borderBottom: isActive ? "3px solid #00b753" : null,
                          }
                        }
                      }
                    >
                      تماس با ما
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='btn_login_header'>
            <button>
              ورود
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;