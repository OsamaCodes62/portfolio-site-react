import React from 'react'
import upwork from '../images/Upwork.png'
import facebook from '../images/Facebook.png'
import amazone from '../images/amazon.png'
import fiverr from '../images/fiverr.png'
import shopify from '../images/Shopify.png'
import '../css/freelance.css';

const Freelance = () => {
  return (
    <>
        <div className="container">
            <div className="row freelance mx-auto">
                {/* Left Side  */}
                <div className="col-md-6 f-left">
                    <span>Works for All these</span>
                    <span>Brands & Clients</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime cumque, ea eum fuga totam optio itaque eligendi a atque officia, voluptatibus consequuntur doloremque possimus magnam blanditiis eaque. Odit, distinctio laboriosam?</span>
                    <button className='btn-blue mt-5 shadow-lg f-btn'>Services</button>
                </div>

                {/* Right Side  */}
                <div className="col-md-6 f-right" data-aos="zoom-in">
                    <div className="main-circle shadow-lg">
                        <div className="sec-circle">
                            <img src={upwork} alt="" />
                        </div>
                        <div className="sec-circle">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="sec-circle">
                            <img src={fiverr} alt="" />
                        </div>
                        <div className="sec-circle">
                            <img src={shopify} alt="" />
                        </div>
                        <div className="sec-circle">
                            <img src={amazone} alt="" />
                        </div>
                    </div>
                    <div className="orange-circle"></div>
                    <div className="blue-circle"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Freelance