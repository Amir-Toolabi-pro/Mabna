import React, { useState } from 'react';

//style
import style from "../../styles/SwipHolders.module.css"

//swiper
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/controller/controller.min.css"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow, Controller, Pagination, EffectFade } from 'swiper/core';
SwiperCore.use([EffectCoverflow, Navigation, Controller, EffectFade]);

//bootstrap
import {ChevronLeft , ChevronRight} from "react-bootstrap-icons"

//img
import circle from "../../images/icons8-circle-16.png"
import icon from "../../images/icons8-top-32.png"

const SwipHolders = ({ getholders, getlicense }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);



  return (
    <>
      <section className={style.swipholders_container} >
        <h3>{getholders ? "سهامداران و اعضای هیئت مدیره" : "تیم مبنا و نمایندگان مجوز"}</h3>
        <div className={style.swipholders_container_holder} >
          <Swiper
            slidesPerView={5}
            speed={500}
            grabCursor={true}
            spaceBetween={0}
            centeredSlides={true}
            effect='coverflow'
            navigation={{
              nextEl: style.next,
              prevEl: style.prev,
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
                      <div className={style.swipholders_container_holder_card}>
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
                      <div className={style.swipholders_container_holder_card}>
                        <img src={person.img} alt="" />
                      </div>
                    </SwiperSlide>
                  )
                } else { null }
              })
            }

          </Swiper>
          <div className={style.thumb}>
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
              className={style.thumbswiper}
            >
              {getholders ? getholders.map((person) => {
                return (
                  <SwiperSlide>
                    <p className={style.SwipHolders_name} >{person.personName}</p>
                    {person.personJob ? <p className={style.SwipHolders_job} >{person.personJob}</p> : null}
                    {person.personTalent ? <p className={style.SwipHolders_talent}>{person.personTalent}</p> : null}
                    {person.talentList ?
                      <ul className={style.SwipHolders_talent_list}>
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
                      <p className={style.SwipHolders_name} >{person.personName}</p>
                      {person.personJob ? <p className={style.SwipHolders_job} >{person.personJob}</p> : null}
                      {person.personTalent ? <p className={style.SwipHolders_talent}>{person.personTalent}</p> : null}
                      {person.license ? <p className={style.SwipHolders_license}>{person.license}</p> : null}
                      {person.talentList ?
                        <ul className={style.SwipHolders_talent_list}>
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
            <button className={style.prev}>
              <ChevronRight className={style.prev_icon} />
            </button>
            <button className={style.next}>
              <ChevronLeft className={style.next_icon} />
            </button>
          </div>
        </div>
      </section >
    </>
  );
}

export default SwipHolders;