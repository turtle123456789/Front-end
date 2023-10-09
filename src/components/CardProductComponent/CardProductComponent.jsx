import React from 'react'
import { FormShip, GiftSale, LevelOfLiking, ProductContent, ProductImg, ProductName, ProductPrice } from './style'
import iconShopingCar from '../../assets/images/shopping-cart 10.svg'
import iconWhiteHeart from '../../assets/images/heart 8.svg'
const CardProductComponent = ({ product }) => {
  return (
    <div >
      <ProductImg>
        <img src={product.image} alt={product.name} />
      </ProductImg>
      <div style={{margin: '0 10px'}}>
        <FormShip>
          <span style={{background: 'var(--blue)'}}>FREESHIP HCM</span>
          <span style={{background: 'var(--brown)'}}>BEST</span>
        </FormShip>
        <ProductName>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}><h4>{product.name}</h4></a>
        </ProductName>
        <ProductContent>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"} className='crop-text2'>{product.description}</a>
        </ProductContent>
        <ProductPrice>
          <div>
            <span className="originalPrice">{product.originalPrice} đ</span>
            <span className="discountedPrice">{product.discountedPrice} đ</span>
          </div>
          <span className='discountPercentage'>{product.discountPercentage}%</span>
        </ProductPrice>
        <LevelOfLiking>
          <div className="review">
            <svg id="reviewStar" xmlns="http://www.w3.org/2000/svg" width="53" height="11" viewBox="0 0 53 11" fill="none">
              <path d="M5.34561 0.0715332L6.54578 3.76526H10.4296L7.28752 6.04811L8.48769 9.74184L5.34561 7.45899L2.20354 9.74184L3.40371 6.04811L0.261633 3.76526H4.14545L5.34561 0.0715332Z" fill="#768134"/>
              <path d="M15.6093 0.0715332L16.8094 3.76526H20.6933L17.5512 6.04811L18.7514 9.74184L15.6093 7.45899L12.4672 9.74184L13.6674 6.04811L10.5253 3.76526H14.4091L15.6093 0.0715332Z" fill="#768134"/>
              <path d="M26.3007 0.0715332L27.5009 3.76526H31.3847L28.2426 6.04811L29.4428 9.74184L26.3007 7.45899L23.1586 9.74184L24.3588 6.04811L21.2167 3.76526H25.1005L26.3007 0.0715332Z" fill="#768134"/>
              <path d="M36.6708 0.0715332L37.871 3.76526H41.7548L38.6127 6.04811L39.8129 9.74184L36.6708 7.45899L33.5287 9.74184L34.7289 6.04811L31.5868 3.76526H35.4706L36.6708 0.0715332Z" fill="#768134"/>
              <path d="M47.3622 0.0715332L48.5624 3.76526H52.4462L49.3041 6.04811L50.5043 9.74184L47.3622 7.45899L44.2201 9.74184L45.4203 6.04811L42.2782 3.76526H46.162L47.3622 0.0715332Z" fill="#DDD9D9"/>
            </svg>
            <div className="quantity">
              <img src={iconShopingCar} alt=""/>
              <span className="quantityProduct">1.145</span>
            </div>
          </div>
          <div class="like">
            <img src={iconWhiteHeart} alt=""/>
          </div>
        </LevelOfLiking>
        <GiftSale>
          <span className="crop-text1" >{product.gift}</span>
        </GiftSale>
      </div>
    </div>
  )
}

export default CardProductComponent