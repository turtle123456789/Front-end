import React from 'react'
import { FormShip, GiftSale, LevelOfLiking, ProductContent, ProductImg, ProductName, ProductPrice } from './style'
import iconShopingCar from '../../assets/images/shopping-cart 10.svg'
import iconWhiteHeart from '../../assets/images/heart 8.svg'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
const CardProductComponent = ({ product, isSellerProduct }) => {
  const percentage = Math.floor(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);
  const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number); // Chọn ngôn ngữ và quốc gia theo ý muốn
};
  return (
    <div style={{maxWidth: '269px', backgroundColor: '#fafafa'}}>
      <ProductImg >
        <img src={product.image} alt={product.name} />
      </ProductImg>
      <div style={{margin: '0 10px'}}>
        <FormShip>
          <span style={{background: 'var(--blue)'}}>FREESHIP HCM</span>
          <span style={{background: 'var(--brown)'}}>BEST</span>
        </FormShip>
        <ProductName>
          <Link to={`/ProductDetails/${product.id}`}>
            <h4 className='crop-text2' style={{ height: '48px' }}>{product.name}</h4>
          </Link>
        </ProductName>
        <ProductContent>
          <a href={"ProductDetails"} className='crop-text2' style={{height: '50px'}}>{product.description}</a>
        </ProductContent>
        <ProductPrice>
          <div>
            <span className="originalPrice">{formatNumber(product.originalPrice)} đ</span>
            <span className="discountedPrice">{formatNumber(product.discountedPrice)} đ</span>
          </div>
          <span className='discountPercentage'>{percentage}%</span>
        </ProductPrice>
        <LevelOfLiking>
          <div className="review">
            <Rate allowHalf defaultValue={2.5} />;
            <div className="quantity">
              <img src={iconShopingCar} alt=""/>
              <span className="quantityProduct">{product.quantity}</span>
            </div>
          </div>
          <div className="like">
            <img src={iconWhiteHeart} alt=""/>
          </div>
        </LevelOfLiking>
        {isSellerProduct && (
        <GiftSale>
          <span className="crop-text1">{product.gift}</span>
        </GiftSale>
      )}
      </div>
    </div>
  )
}

export default CardProductComponent