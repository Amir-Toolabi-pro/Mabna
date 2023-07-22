import React, { useState } from 'react';

import "../../styles/SwipHolders.css"

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/controller/controller.min.css"
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, EffectCoverflow, Controller, Pagination, EffectFade } from 'swiper/core';
SwiperCore.use([EffectCoverflow, Navigation, Controller, EffectFade]);

import {ChevronLeft , ChevronRight} from "react-bootstrap-icons"

import circle from "../../images/icons8-circle-16.png"
import icon from "../../images/icons8-top-32.png"

const SwipHolders = ({ getholders, getlicense }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);



  return (
    <>
      <section className='swipholders_container' >
        <h3>{getholders ? "سهامداران و اعضای هیئت مدیره" : "تیم مبنا و نمایندگان مجوز"}</h3>
        <div className='swipholders_container_holder' >
          <Swiper
            slidesPerView={5}
            speed={500}
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            effect='coverflow'
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 5,
              slideShadows: true
            }}
            controller={{ control: controlledSwiper }}
            className="myswiper"
          >
            {getholders ?
              getholders.map((person) => {
                if (person.img) {
                  return (
                    <SwiperSlide>
                      <div className="swipholders_container_holder_card">
                        <img src={person.img} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                } else { null }
              }) :
              getlicense.map((person) => {
                if (person.img) {
                  return (
                    <SwiperSlide>
                      <div className="swipholders_container_holder_card">
                        <img src={person.img} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                } else { null }
              })
            }

          </Swiper>
          <div className='thumb'>
            <Swiper
              slidesPerView={1}
              grabCursor={false}
              spaceBetween={0}
              centeredSlides={true}
              effect='fade'
              fadeEffect={{
                crossFade: true
              }}
              allowTouchMove={false}
              modules={[Controller]}
              onSwiper={setControlledSwiper}
              draggable={false}
              className="thumbswiper"
            >
              {getholders ? getholders.map((person) => {
                return (
                  <SwiperSlide>
                    <p className='SwipHolders_name' >{person.personName}</p>
                    {person.personJob ? <p className='SwipHolders_job' >{person.personJob}</p> : null}
                    {person.personTalent ? <p className="SwipHolders_talent">{person.personTalent}</p> : null}
                    {person.talentList ?
                      <ul className="SwipHolders_talent_list">
                        {person.talentList.map((list) => {
                          return (
                            <li>
                              <img src={circle} alt="" />{list.listone}
                            </li>
                          )
                        })}
                      </ul> :
                      null
                    }
                  </SwiperSlide>
                )
              }) :
                getlicense.map((person) => {
                  return (
                    <SwiperSlide>
                      <p className='SwipHolders_name' >{person.personName}</p>
                      {person.personJob ? <p className='SwipHolders_job' >{person.personJob}</p> : null}
                      {person.personTalent ? <p className="SwipHolders_talent">{person.personTalent}</p> : null}
                      {person.license ? <p className="SwipHolders_license">{person.license}</p> : null}
                      {person.talentList ?
                        <ul className="SwipHolders_talent_list">
                          {person.talentList.map((list) => {
                            return (
                              <li>
                                <img src={circle} alt="" />{list.listone}
                              </li>
                            )
                          })}
                        </ul> :
                        null
                      }
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            <button className='prev'>
              <ChevronRight className='prev_icon' />
            </button>
            <button className='next'>
              <ChevronLeft className='next_icon' />
            </button>
          </div>
        </div>
      </section >
    </>
  );
}

export default SwipHolders;