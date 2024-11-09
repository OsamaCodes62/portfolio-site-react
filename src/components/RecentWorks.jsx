import React from 'react'
import '../css/recent-works.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import p6 from '../images/p6.png'
import p7 from '../images/p7.png'

const RecentWorks = () => {
  // Array of portfolio items, each with an image, link, title, and description
  const portfolioItems = [
    { img: p1, link: "https://your-link1.com", title: "Project 1", description: "A brief description of Project 1" },
    { img: p2, link: "https://your-link2.com", title: "Project 2", description: "A brief description of Project 2" },
    { img: p3, link: "https://your-link3.com", title: "Project 3", description: "A brief description of Project 3" },
    { img: p4, link: "https://your-link4.com", title: "Project 4", description: "A brief description of Project 4" },
    { img: p5, link: "https://your-link5.com", title: "Project 5", description: "A brief description of Project 5" },
    { img: p6, link: "https://your-link6.com", title: "Project 6", description: "A brief description of Project 6" },
    { img: p7, link: "https://your-link7.com", title: "Project 7", description: "A brief description of Project 7" },
  ];

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
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item">
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default RecentWorks;
