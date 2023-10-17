import React , { useState }from 'react'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import {  ProductDetails, WatchProduct } from './style'
import { Col, Row } from 'antd'
import Slider from 'react-slick';
import img1 from '../../assets/images/ProductDetail (1).webp'
import img2 from '../../assets/images/ProductDetail (2).webp'
import img3 from '../../assets/images/ProductDetail (3).webp'
import img4 from '../../assets/images/ProductDetail (4).webp'
import img5 from '../../assets/images/ProductDetail (5).webp'
import iconWhiteHeart from '../../assets/images/icon-heart.svg'
import iconShopingCar from '../../assets/images/icon-shopping_cart.svg'
import {  productsData } from '../../Data/ProductData'
import { LevelOfLiking, ProductPrice } from '../../components/CardProductComponent/style';
import { useParams} from 'react-router-dom';
const ProductDetailsPage = ( ) => {
    const { productId } = useParams(); // Extract the product ID from the URL
    const [currentImage, setCurrentImage] = useState(img1);
    // Find the product in productsData that matches the extracted product ID
    const product = productsData.find((item) => item.id === Number(productId));
    const percentage = Math.floor(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100);
    const save = (product.originalPrice - product.discountedPrice);
    if (!product) {
      // Handle the case where the product with the given ID is not found
      return <div>Product not found</div>;
    } 
    const settings = {  
        infinite: true, // Vòng lặp vô tận
        speed: 1000, // Tốc độ trượt
        slidesToShow: 4, // Số slide hiển thị trên mỗi lần trượt
        slidesToScroll: 1, // Số slide trượt mỗi lần
        autoplaySpeed: 2000,
        autoplay: true,
        cssEase: "linear",
      };
      

      const handleImageClick = (image) => {
        setCurrentImage(image);
      };
      const formatNumber = (number) => {
        return new Intl.NumberFormat('vi-VN').format(number); // Chọn ngôn ngữ và quốc gia theo ý muốn
    };
  return (
    <div>
        <Container>
            <ProductDetails>
                <p className="AddrestProduct">Trang chủ  /  Nước tẩy trang  /  Nước Tẩy Trang Làm Sạch Sâu 3 In 1 L'oreal Micellar Water Deep Cleansing</p>
                <Row>
                    <Col span={11}>
                        <WatchProduct>
                        <img src={currentImage} alt="" />
                        <Slider {...settings}>
                            <img src={img2} alt="" onClick={() => handleImageClick(img2)} />
                            <img src={img3} alt="" onClick={() => handleImageClick(img3)} />
                            <img src={img4} alt="" onClick={() => handleImageClick(img4)} />
                            <img src={img5} alt="" onClick={() => handleImageClick(img5)} />
                            <img src={img2} alt="" onClick={() => handleImageClick(img2)} />
                            <img src={img3} alt="" onClick={() => handleImageClick(img3)} />
                            <img src={img4} alt="" onClick={() => handleImageClick(img4)} />
                            <img src={img5} alt="" onClick={() => handleImageClick(img5)} />
                        </Slider>
                        </WatchProduct>
                    </Col>
                    <Col span={13}>
                        <Row>
                            <Col span={8}>
                                <span>{product.Brand}</span>
                            </Col>
                            <Col span={8} offset={8}>
                                <div class="like" style={{float: 'right'}}>
                                    <img src={iconWhiteHeart} alt=""/>
                                </div>
                            </Col>
                        </Row>
                        <h4>{product.name}</h4>
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
                                <span className="quantityProduct">{product.quantity}</span>
                                </div>
                            </div>

                        </LevelOfLiking>
                        <ProductPrice>
                            <div>
                                <span className="originalPrice" style={{fontSize: '35px'}}>{formatNumber(product.originalPrice)} đ</span>
                                <span className="discountedPrice">{formatNumber(product.discountedPrice)} đ</span>
                            </div>
                            <span className='discountPercentage'>{percentage}%</span>
                        </ProductPrice>
                        <p style={{margin: '0' }}>(Tiết kiệm: <span style={{color: '#6B1D14', fontWeight: '600'}}>{formatNumber(save)} đ</span>)</p>

                    </Col>
                </Row>

            </ProductDetails>
        </Container>
    </div>
  )
}

export default ProductDetailsPage