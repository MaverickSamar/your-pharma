import React, { Component } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component{

    render() {
        const settings = {
            dots: true,
            autoplay: true,
            arrows:true,
            autoplaySpeed: 3000,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll:1,
        };

        return(
            <div className="carousel-container mt-6">
                <Slider {...settings}>
                    <div>
                        <img src="https://as1.ftcdn.net/v2/jpg/02/07/09/06/1000_F_207090644_pzixjQM0iSPLdTTAjDT0DX4nXVMz7Non.jpg" alt="" className="car-pic" style={{width: "100%", height:"80vh"}}/>
                    </div>

                    <div>
                        <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618566499779/medicines-offers.jpg" alt="" className="car-pic" style={{width: "100%", height:"80vh"}}/>
                    </div>
                    <div>
                        <img src="https://www.shutterstock.com/image-photo/doctors-using-stethoscope-digital-medical-600w-1923194051.jpg" alt="" className="car-pic" style={{width: "100%", height:"80vh"}}/>
                    </div>
                </Slider>
            </div>
        )
    }
}
