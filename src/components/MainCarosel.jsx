import React from "react";
import  { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

// Sample blog content
const cardData = [
  { title: "Businessmama", image: "mam4.jpg" },
  { title: "Businessmama", image: "mam1.jpg" },
  { title: "Businessmama",  image: "mama3.jpg" },
  { title: "Businessmama",  image: "mama5.jpg" },
];

// Blog card component
const BlogCard = ({ title, image, description }) => (
  <div style={{ paddingTop: '125px', width: '100%',marginRight:'0px',paddingRight:'0px',
   

   }}>
    <div style={{
      position: "relative",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      borderRadius: "5px",
      height: "450px",
      color: "white",
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textShadow: "0px 0px 5px black",
      textAlign: "center",
    }}>
      <h3>{title}</h3>
   

    </div>
  </div>
);
// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        display: "block",
        background: "gray",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        left: "0px",
     zIndex:1,
        bottom:'205px',
        cursor: "pointer"
      }}
    >
        <FaChevronLeft style={{fontSize:'20px'}} />
   
    </div>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        display: "block",
        background: "gray",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        right: "0px",
            
               bottom:'205px',
        cursor: "pointer"
      }}
    >
    <FaAngleRight style={{fontSize:'20px'}} />
    </div>
  );
const MainCarousel = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
  };

  return (
    <div >
        
      <Slider ref={sliderRef} {...settings} >
        {cardData.map((card, index) => (
           
          <BlogCard key ={index} {...card} />
         
        ))}
      </Slider>
      
    </div>
  );
};

export default MainCarousel;
