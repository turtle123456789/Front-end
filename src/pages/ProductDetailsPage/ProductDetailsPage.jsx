  import React , { useEffect, useState }from 'react'
  import { Container } from '../../components/ContainerComponent/ContainerComponent'
  import {  Choice, InforProduct, Parameters, ProductDetails, QuantityBuy, WatchProduct } from './style'
  import { Col, Rate, Row, Tabs } from 'antd'
  import Slider from 'react-slick';
  import img1 from '../../assets/images/ProductDetail (1).webp'
  import img2 from '../../assets/images/ProductDetail (2).webp'
  import img3 from '../../assets/images/ProductDetail (3).webp'
  import img4 from '../../assets/images/ProductDetail (4).webp'
  import img5 from '../../assets/images/ProductDetail (5).webp'
  import iconWhiteHeart from '../../assets/images/icon-heart.svg'
  import iconShopingCar from '../../assets/images/icon-shopping_cart.svg'
  import { LevelOfLiking, ProductPrice } from '../../components/CardProductComponent/style';
  import { Link, useLocation, useParams} from 'react-router-dom';
  import {
      MinusOutlined,
      PlusOutlined,
      ShoppingCartOutlined,
      WalletOutlined,
    } from '@ant-design/icons';
  import SlideProductComponent from '../../components/SlideProductComponent/SlideProductComponent';
  import * as ProductService from '../../services/ProductService'
  import { useDispatch, useSelector } from 'react-redux';
  import { initFacebookSDK } from '../../utils';
  import { useQuery } from '@tanstack/react-query';
  const ProductDetailsPage = ( ) => {
      const Params  = useParams(); 
      const idProduct = Params.productId
      const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if(id) {
          const res = await ProductService.getDetailsProduct(id)
          return res.data
        }
      }
      const { data: productDetails } = useQuery(['product-details', idProduct], fetchGetDetailsProduct, { enabled : !!idProduct})
      console.log('productDetails', productDetails?.type)
      const fetchProductAll = async () =>{
        const res = await ProductService.getAllProduct()
        return res
      }
      const {data: products}= useQuery(['products'], fetchProductAll,{retry: 1,retryDelay: 1000})
      const [numProduct, setNumProduct] = useState(1)
      const user = useSelector((state) => state.user)
      const order = useSelector((state) => state.order)
      const [errorLimitOrder,setErrorLimitOrder] = useState(false)
      const location = useLocation()
      const dispatch = useDispatch()
      const relatedProducts = products?.data?.filter(product => product?.type === productDetails?.type);

    useEffect(() => {
        initFacebookSDK()
    }, [])

      const [currentImage, setCurrentImage] = useState(img1);

      const percentages = Math.round(productDetails?.percentage)
      const save = (productDetails?.price - productDetails?.discount)
      const [count, setCount] = useState(0);
      const decreaseCount = () => {
          if (count > 0) {
            setCount(count - 1);
       
          }
        };
      
        const increaseCount = () => {
          setCount(count + 1);
        };
      const onChange = (key) => {
          console.log(key);
        };
        
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
      const formattedInfor = {
          __html: productDetails?.description.split('\n').map((paragraph, index) => `<p key=${index}>${paragraph}</p>`).join(''),
      };
      const formattedInstruct = {
          __html: productDetails?.description.split('\n').map((paragraph, index) => `<p key=${index}>${paragraph}</p>`).join(''),
      };
      const items = [
          {
            key: '1',
            label: 'Thông tin sản phẩm',
            children: (
              <div>
                <h4>Thông tin sản phẩm</h4>
                <InforProduct dangerouslySetInnerHTML={formattedInfor} ></InforProduct>,
              </div>
            )
          },
          {
            key: '2',
            label: 'Thông số sản phẩm',
            children: (
              <div>
                <h4>Thông số sản phẩm</h4>
                <Parameters>
                  <div className="name">
                      <li>Barcode</li>
                      <li>Thương hiện</li>
                      <li>Xuất xứ</li>
                      <li>Loại da</li>
                      <li>Giới tính</li>
                  </div>
                  <div className="content">
                      <li>{productDetails?.barcode}</li>
                      <li>{productDetails?.brand}</li>
                      <li>{productDetails?.origin}</li>
                      <li>{productDetails?.type}</li>
                      <li>{productDetails?.sex}</li>
                  </div>
                </Parameters>
              </div>
            ),
          },
          {
            key: '3',
            label: 'Hướng dẫn sử dụng',
            children: (
              <div>
                  <h4>Hướng Dẫn Sử Dụng</h4>
                  <InforProduct dangerouslySetInnerHTML={formattedInstruct} ></InforProduct>,
              </div>
            ),
          },
        ];
    return (
      <div>
          <Container>
              <ProductDetails>
              <p className="AddrestProduct">
                <Link to="/">Trang chủ</Link> /{' '}
                <Link to={`/ProductsPage/${productDetails?.type}`}>{productDetails?.type}</Link> / {productDetails?.name}
              </p>
                  <Row>
                      <Col span={11}>
                          <WatchProduct>
                          <img src={productDetails?.image} alt="" />
                          <Slider {...settings}>
                              <img src={img2} alt="" onClick={() => handleImageClick(img2)} />
                              <img src={img3} alt="" onClick={() => handleImageClick(img3)} />
                              <img src={img4} alt="" onClick={() => handleImageClick(img4)} />
                              <img src={img5} alt="" onClick={() => handleImageClick(img5)} />
                              <img src={img2} alt="" onClick={() => handleImageClick(img2)} />
                          </Slider>
                          </WatchProduct>
                      </Col>
                      <Col span={13}>
                          <Row>
                              <Col span={8}>
                                  <span>{productDetails?.Brand}</span>
                              </Col>
                              <Col span={8} offset={8}>
                                  <div class="like" style={{float: 'right'}}>
                                      <img src={iconWhiteHeart} alt=""/>
                                  </div>
                              </Col>
                          </Row>
                          <h4>{productDetails?.name}</h4>
                          <LevelOfLiking>
                              <div className="review">
                                  <Rate allowHalf defaultValue={2.5} />
                                  <div className="quantity">
                                  <img src={iconShopingCar} alt=""/>
                                  <span className="quantityProduct">{productDetails?.countInStock}</span>
                                  </div>
                              </div>
                          </LevelOfLiking>
                          <br />
                          <ProductPrice>
                              <div>
                                  <span className="originalPrice" style={{fontSize: '35px'}}>{formatNumber(productDetails?.price)} đ</span>
                                  <span className="discountedPrice">{formatNumber(productDetails?.discount)} đ</span>
                              </div>
                              <span className='discountPercentage'>{percentages}%</span>
                          </ProductPrice>
                          <p style={{margin: '0' }}>(Tiết kiệm: <span style={{color: '#6B1D14', fontWeight: '600'}}>{formatNumber(save)} đ</span>)</p>
                          <br /> <br />
                          <span style={{fontWeight: 600}}>Số lượng:</span>
                          <br /><br />
                          <QuantityBuy>
                              <button onClick={decreaseCount}><MinusOutlined/></button>
                              <span className="count">{count}</span>
                              <button onClick={increaseCount}><PlusOutlined/></button>
                          </QuantityBuy>
                          <br /><br /><br /><br />
                          <Choice>
                              <button className="addCart">
                              <ShoppingCartOutlined /> Thêm vào giỏ hàng
                              </button>
                              <button className="buyNow">
                              <WalletOutlined /> Mua ngay
                              </button>
                          </Choice>
                      </Col>
                  </Row>
                  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                  <h4>Các sản phẩm liên quan</h4>
                    <SlideProductComponent products={relatedProducts}/>
              </ProductDetails>
          </Container>
      </div>
    )
  }

  export default ProductDetailsPage