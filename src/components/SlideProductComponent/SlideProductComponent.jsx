import React from 'react';
import Slider from 'react-slick';
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent';
import "./style.css";

const SlideProductComponent = ({ products }) => {
  const settings = {  
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
  };

  const productsWithSelled = (products?.data && Array.isArray(products.data))
    ? products.data
        .filter(product => product?.gift?.length > 0)
        .map(product => {
          const modifiedProduct = { ...product };
          modifiedProduct.selled = true;
          return modifiedProduct;
        })
    : [];

  return (
    <div>
      <Slider {...settings}>
        {products?.length > 0
          ? products?.map((product) => (
              <CardProductComponent
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                type={product.type}
                selled={product.selled}
                discount={product.discount}
                id={product._id}
                percentage={product.percentage}
                gift={product.gift}
              />
            ))
          : productsWithSelled?.map((product) => (
              <CardProductComponent
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                type={product.type}
                selled={product.selled}
                discount={product.discount}
                id={product._id}
                percentage={product.percentage}
                gift={product.gift}
              />
            ))
        }
      </Slider>
    </div>
  );
};

export default SlideProductComponent;
