import React from 'react';
import '../css/recent-works.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay } from 'swiper';

// Import your images
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import p5 from '../images/p5.png';
import p6 from '../images/p6.png';
import p7 from '../images/p7.png';

// Configure Swiper to use modules
SwiperCore.use([Autoplay]);

const RecentWorks = () => {
  const portfolioItems = [
    { img: p1, link: "https://github.com/OsamaCodes62/sidebar-project", title: "Sidebar-Project", description: "In this project I created a responsive sidebar using HTML, CSS, and JavaScript." },
    { img: p2, link: "https://github.com/OsamaCodes62/portfolio-site-react", title: "Portfolio-Project", description: "In this project, I used react to show my portfolio in interesting and appealing way" },
    { img: p3, link: "https://github.com/OsamaCodes62/Node_api", title: "REST API", description: "In this project I used Node.js to create a REST API" },
    // Uncomment the following lines if you want more items
    // { img: p4, link: "https://your-link4.com", title: "Project 4", description: "A brief description of Project 4" },
    // { img: p5, link: "https://your-link5.com", title: "Project 5", description: "A brief description of Project 5" },
    // { img: p6, link: "https://your-link6.com", title: "Project 6", description: "A brief description of Project 6" },
    // { img: p7, link: "https://your-link7.com", title: "Project 7", description: "A brief description of Project 7" },
  ];

  return (
    <div className="container works">
      <div className="heading">
        <span>Recent Works</span>
        <span>Portfolio</span>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        loop={portfolioItems.length > 3} // Conditionally enable loop if more than 3 items
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
  );
}

export default RecentWorks;
