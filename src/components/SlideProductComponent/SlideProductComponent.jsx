import React from 'react';
import Slider from 'react-slick';
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent';
import "./style.css";
const SlideProductComponent = ({ products }) => {
  const settings = {  
    infinite: true, // Vòng lặp vô tận
    speed: 1000, // Tốc độ trượt
    slidesToShow: 5, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <CardProductComponent key={product.id} product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideProductComponent;
