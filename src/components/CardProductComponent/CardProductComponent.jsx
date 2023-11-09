import React from 'react'
import { FormShip, GiftSale, LevelOfLiking, ProductContent, ProductImg, ProductName, ProductPrice } from './style'
import iconShopingCar from '../../assets/images/shopping-cart 10.svg'
import iconWhiteHeart from '../../assets/images/heart 8.svg'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
const CardProductComponent = (props) => {
  const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
  const percentage = Math.floor(((price -discount) / price) * 100);
  const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number); // Chọn ngôn ngữ và quốc gia theo ý muốn
};
  return (
    <div style={{maxWidth: '269px', backgroundColor: '#fafafa'}}>
      <ProductImg >
        <img src={image} alt={name} />
      </ProductImg>
      <div style={{margin: '0 10px'}}>
        <FormShip>
          <span style={{background: 'var(--blue)'}}>FREESHIP HCM</span>
          <span style={{background: 'var(--brown)'}}>BEST</span>
        </FormShip>
        <ProductName>
          <Link to={`/ProductDetails/${id}`}>
            <h4 className='crop-text2' style={{ height: '48px' }}>{name}</h4>
          </Link>
        </ProductName>
        <ProductContent>
          <a href={"ProductDetails"} className='crop-text2' style={{height: '50px'}}>{description}</a>
        </ProductContent>
        <ProductPrice>
          <div>
            <span className="originalPrice">{formatNumber(price)} đ</span>
            <span className="discountedPrice">{formatNumber(discount)} đ</span>
          </div>
          <span className='discountPercentage'>{percentage}%</span>
        </ProductPrice>
        <LevelOfLiking>
          <div className="review">
            <Rate allowHalf defaultValue={2.5} />;
            <div className="quantity">
              <img src={iconShopingCar} alt=""/>
              <span className="quantityProduct">{countInStock}</span>
            </div>
          </div>
          <div className="like">
            <img src={iconWhiteHeart} alt=""/>
          </div>
        </LevelOfLiking>
        {selled && (
        <GiftSale>
          <span className="crop-text1">{percentage}</span>
        </GiftSale>
      )}
      </div>
    </div>
  )
}

export default CardProductComponent