import React from 'react'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import { BannerMain, BannerRight, HomeAd, ListTypeProduct, MenuBenefits, MenuEven } from './style'
import bannerMain from '../../assets/images/Banner-main.webp'
import bannerRight from '../../assets/images/Banner-right.webp'
import iconHair from '../../assets/images/hair.svg'
import iconAntiAge from '../../assets/images/anti-age.svg'
import iconMakeup from '../../assets/images/makeup.svg'
import iconPersonalHygiene from '../../assets/images/personal-hygiene.svg'
import iconPerfumeBottle from '../../assets/images/perfume-bottle .svg'
import iconFunctionalFoods from '../../assets/images/functional-foods.svg'
import iconVector from '../../assets/images/Vector 2.svg'
import image1 from '../../assets/images/image(1).webp'
import image2 from '../../assets/images/image(2).webp'
import image3 from '../../assets/images/image(3).webp'
import image4 from '../../assets/images/image(4).webp'
import image5 from '../../assets/images/image(5).webp'
import image6 from '../../assets/images/image(6).webp'
import image7 from '../../assets/images/image(7).webp'
import image8 from '../../assets/images/image(8).webp'
import image9 from '../../assets/images/image(9).webp'
import image10 from '../../assets/images/image(10).webp'
import HeaderSaleComponent from '../../components/HeaderSaleComponent/HeaderSaleComponent'
import SlideProductComponent from '../../components/SlideProductComponent/SlideProductComponent'

import CardTypeProductComponent from '../../components/CardTypeProductComponent/CardTypeProductComponent'

const HomePage = () => {
  const productsData = [
    {
      id: 1,
      name: 'Mặt Nạ Miếng Dưỡng Ẩm',
      image: require('../../assets/images/image 119 (12).webp'),
      description: 'Mô tả sản phẩm 1',
      originalPrice: 400000,
      discountedPrice:4000,
      discountPercentage: 15,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      image: require('../../assets/images/image 119 (13).webp'),
      description: 'Mô tả sản phẩm 2',
      originalPrice: 250000,
      discountedPrice:4000,
      discountPercentage: 20,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    {
      id: 3,
      name: 'Mặt Nạ Miếng Dưỡng Ẩm',
      image: require('../../assets/images/image 119 (14).webp'),
      description: 'Mô tả sản phẩm 1',
      originalPrice: 400000,
      discountedPrice:4000,
      discountPercentage: 15,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    {
      id: 4,
      name: 'Sản phẩm 2',
      image: require('../../assets/images/image 119 (15).webp'),
      description: 'Mô tả sản phẩm 2',
      originalPrice: 250000,
      discountedPrice:4000,
      discountPercentage: 20,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    {
      id: 5,
      name: 'Mặt Nạ Miếng Dưỡng Ẩm',
      image: require('../../assets/images/image 119 (13).webp'),
      description: 'Mô tả sản phẩm 1',
      originalPrice: 400000,
      discountedPrice:4000,
      discountPercentage: 15,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    {
      id: 6,
      name: 'Sản phẩm 2',
      image: require('../../assets/images/image 119 (16).webp'),
      description: 'Mô tả sản phẩm 2',
      originalPrice: 250000,
      discountedPrice:4000,
      discountPercentage: 20,
      gift: 'jsahbdjasbdkjhsdkjasdmabsd'
    },
    // Thêm các sản phẩm khác nếu cần
  ];
  
  const TypeProductData = [
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    {
      id: 1,
      name: 'Bộ sản phẩm',
      image: require('../../assets/images/image 119 (16).webp'), 
      quantity: 119,
    },
    
  ]
  return (
    <div>
      <Container>
        <HomeAd>
          <MenuBenefits>
            <li>
            <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
              <img src={iconHair} alt="" />
              <span>Chăm sóc tóc & da đầu</span>
              <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
            </a>
            </li>
            <li>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconAntiAge} alt="" />
                <span>Chăm sóc da mặt</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
            </li>
            <li>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconMakeup} alt="" />
                <span>Trang điểm</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>  
            </li>
            <li>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPersonalHygiene} alt="" />
                <span>Chăm sóc cơ thể</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
            </li>
            <li>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPerfumeBottle} alt="" />
                <span>Nước hoa</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
            </li>
            <li>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconFunctionalFoods} alt="" />
                <span>Thực phẩm chức năng</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
            </li>
          </MenuBenefits>
          <BannerMain>
            <img src={bannerMain} alt="Banner AD" />
          </BannerMain>
          <BannerRight>
            <img src={bannerRight} alt="Banner AD" />
          </BannerRight>
        </HomeAd>
        <MenuEven>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image1} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image2} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image3} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image4} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image5} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image6} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image7} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image8} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image9} alt="" />
            <span>Bán Chạy</span>
          </a>
          <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
            <img src={image10} alt="" />
            <span>Bán Chạy</span>
          </a>
        </MenuEven>
        <HeaderSaleComponent/>
        <SlideProductComponent products={productsData} />
        <div style={{margin: '0 30px'}}>
          <h2>DANH MỤC SẢN PHẨM</h2>
          <ListTypeProduct>
            {TypeProductData.map((typeProduct) => (
              <CardTypeProductComponent key={typeProduct.id} typeProduct={typeProduct} />
            ))}
          </ListTypeProduct>
        </div>
      </Container>
     
    </div>
  )
}

export default HomePage