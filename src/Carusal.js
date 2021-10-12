import React from 'react'
import "./Carusal.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Carusal() {
    return (
        <div className="car_img">
               <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="car_image1"
src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="car_image2"
src="https://d39w7f4ix9f5s9.cloudfront.net/dims4/default/5cef330/2147483647/strip/true/crop/2048x924+0+85/resize/1440x650!/quality/90/?url=http%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fcd%2Fd4%2Fdd1c6d734d4f8ff72c007c6c1fab%2Ftheboys-2048x1080-forpr.jpg"
            alt="Image Two"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="car_image3"
src="https://s3-ap-southeast-2.amazonaws.com/techau-images/WP%20Media%20Folder%20-%20techau/wp-content/uploads/2020/04/Amazon.png"
            alt="Image Three"
          />
         
        </Carousel.Item>
      </Carousel>
        </div>
    )
}

export default Carusal
