import React from 'react'
import '../css/recent-works.css';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'

const RecentWorks = () => {
  return (
    <>
        <div className="container works">
            <div className="heading">
                <span>Recent Works</span>
                <span>Portfolio</span>
            </div>
            <Swiper 
            spaceBetween={10}
            slidesPerView={3}
            grabCursor={true}
            >
                <SwiperSlide>
                    <img src={p1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p7} alt="" />
                </SwiperSlide>

            </Swiper>

        </div>
    </>
  )
}

export default RecentWorks