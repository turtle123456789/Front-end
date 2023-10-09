import React from 'react';
import Slider from 'react-slick';
import CardBrandComponent from '../../components/CardBrandComponent/CardBrandComponent';
import "./style.css";
const SlideBrandComponent = ({ brands }) => {
  const settings = {  
    infinite: true, // Vòng lặp vô tận
    speed: 1000, // Tốc độ trượt
    slidesToShow: 4, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div style={{maxWidth: '850px'}}>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index}>
            <CardBrandComponent key={brand.id} brand={brand} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideBrandComponent;
