import React from 'react';
import Slider from 'react-slick';
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent';
import { NextButton, PrevButton } from './style';

const SlideProductComponent = ({ products }) => {
  const settings = {  
    infinite: true, // Vòng lặp vô tận
    speed: 500, // Tốc độ trượt
    slidesToShow: 5, // Số slide hiển thị trên mỗi lần trượt
    slidesToScroll: 1, // Số slide trượt mỗi lần
  };

  return (
    <div style={{marginLeft: '30px',}}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <CardProductComponent key={product.id} product={product} />
          </div>
        ))}
      </Slider>
      <NextButton onClick={() => this.slider.slickNext()}>Next</NextButton>
      {/* Nút "Prev" */}
      <PrevButton onClick={() => this.slider.slickPrev()}>Prev</PrevButton>
    </div>
  );
};

export default SlideProductComponent;
