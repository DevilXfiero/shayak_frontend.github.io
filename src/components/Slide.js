import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';


function Slide()
{
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://pbs.twimg.com/media/EROkisGUcAA3fIN.jpg"
        alt="First slide"
        style={{height:"600px"}}
      />
      
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://imgmedia.lbb.in/media/2019/11/5ddd09c236294a4669728c8f_1574767042852.jpg"
        alt="Second slide"
        style={{height:"600px"}}
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt="Third slide"
        style={{height:"600px"}}
      />
      
    </Carousel.Item>
  </Carousel>
  );

}

export default Slide;