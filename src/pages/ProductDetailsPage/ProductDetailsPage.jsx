  import React , { useEffect, useState }from 'react'
  import { Container } from '../../components/ContainerComponent/ContainerComponent'
  import {  Choice, InforProduct, Parameters, ProductDetails, QuantityBuy, WatchProduct, WrapperInputNumber, WrapperQualityProduct } from './style'
  import { Col, Rate, Row, Tabs, message } from 'antd'
  import Slider from 'react-slick';
  import img1 from '../../assets/images/ProductDetail (1).webp'
  import img2 from '../../assets/images/ProductDetail (2).webp'
  import img3 from '../../assets/images/ProductDetail (3).webp'
  import img4 from '../../assets/images/ProductDetail (4).webp'
  import img5 from '../../assets/images/ProductDetail (5).webp'
  import iconWhiteHeart from '../../assets/images/icon-heart.svg'
  import iconShopingCar from '../../assets/images/icon-shopping_cart.svg'
  import { LevelOfLiking, ProductPrice } from '../../components/CardProductComponent/style';
  import { Link, useLocation, useNavigate, useParams} from 'react-router-dom';
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
import { addOrderProduct, resetOrder } from '../../redux/slides/orderSlide';
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
      const navigate = useNavigate()
      const order = useSelector((state) => state.order)
      const [errorLimitOrder,setErrorLimitOrder] = useState(false)
      const location = useLocation()
      const dispatch = useDispatch()
      const relatedProducts = products?.data?.filter(product => product?.type === productDetails?.type);

    useEffect(() => {
        initFacebookSDK()
    }, [])

      const [currentImage, setCurrentImage] = useState(img1);
      const onChange = (value) => { 
        setNumProduct(Number(value))
    } 
    
    const handleChangeCount = (type, limited) => {
      if(type === 'increase') {
          if(!limited) {
              setNumProduct(numProduct + 1)
          }
      }else {
          if(!limited) {
              setNumProduct(numProduct - 1)
          }
      }
  }
      const percentages = Math.round(productDetails?.percentage)
      const save = (productDetails?.price - productDetails?.discount)
      useEffect(() => {
        const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id) 
        if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
            setErrorLimitOrder(false)
        } else if(productDetails?.countInStock === 0){
            setErrorLimitOrder(true)
        }
    },[numProduct])

    useEffect(() => {
        if(order.isSucessOrder) {
            message.success('Đã thêm vào giỏ hàng')
        }
        return () => {
            dispatch(resetOrder())
        }
    }, [order.isSucessOrder])

    const handleAddOrderProduct = () => {
      if(!user?.id) {
            message.error('Vui lòng đăng nhập')
          navigate('/Signin', {state: location?.pathname})
      }else {
          const orderRedux = order?.orderItems?.find((item) => item.product === productDetails?._id)
          if((orderRedux?.amount + numProduct) <= orderRedux?.countInstock || (!orderRedux && productDetails?.countInStock > 0)) {
              dispatch(addOrderProduct({
                  orderItem: {
                      name: productDetails?.name,
                      amount: numProduct,
                      image: productDetails?.image,
                      price: productDetails?.price,
                      product: productDetails?._id,
                      discount: productDetails?.discount,
                      countInstock: productDetails?.countInStock
                  }
              }))
          } else {
              setErrorLimitOrder(true)
          }
      }
  }
  const numberBuy = productDetails?.countInStock - numProduct;
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
                      <li>Thương hiệu</li>
                      <li>Công dụng</li>
      
                  </div>
                  <div className="content">
                      <li>{productDetails?.barcode}</li>
                      <li>{productDetails?.brand}</li>
                      <li>{productDetails?.type}</li>
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
                              <img src={productDetails?.image} alt="" onClick={() => handleImageClick(img2)} />
                              <img src={productDetails?.image1} alt="" onClick={() => handleImageClick(img3)} />
                              <img src={productDetails?.image2} alt="" onClick={() => handleImageClick(img4)} />
                              <img src={productDetails?.image3} alt="" onClick={() => handleImageClick(img5)} />
                              <img src={productDetails?.image4} alt="" onClick={() => handleImageClick(img2)} />
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
                                  <span className="quantityProduct">{numberBuy}</span>
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
                          <WrapperQualityProduct>
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease',numProduct === 1)}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                            <WrapperInputNumber onChange={onChange} defaultValue={1} max={productDetails?.countInStock} min={1} value={numProduct} size="small" />
                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase',  numProduct === productDetails?.countInStock)}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </WrapperQualityProduct>
                          </QuantityBuy>
                          <br /><br /><br /><br />
                          <Choice>
                              <button className="addCart"  onClick={handleAddOrderProduct}>
                              <ShoppingCartOutlined /> Thêm vào giỏ hàng
                              </button>
                              {errorLimitOrder && <div style={{color: 'red'}}>San pham het hang</div>}

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