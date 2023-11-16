import React ,{ useState, useEffect } from 'react'
import { Container } from '../../components/ContainerComponent/ContainerComponent'
import { BannerMain, BannerRight, BestSeller, BrandProduct, BrandProductName, CategoryMenuBenefits , HomeAd, MenuBenefits, MenuEven } from './style'
import bannerMain from '../../assets/images/Banner-main.webp'
import bannerRight from '../../assets/images/Banner-right.webp'
import iconHair from '../../assets/images/hair.svg'
import iconAntiAge from '../../assets/images/anti-age.svg'
import iconMakeup from '../../assets/images/makeup.svg'
import iconPersonalHygiene from '../../assets/images/personal-hygiene.svg'
import iconPerfumeBottle from '../../assets/images/perfume-bottle .svg'
import iconFunctionalFoods from '../../assets/images/functional-foods.svg'
import iconArrow from '../../assets/images/Arrow 4.svg'
import iconVector from '../../assets/images/Vector 2.svg'
import posterSupport from '../../assets/images/poster1.webp'
import HeaderSaleComponent from '../../components/HeaderSaleComponent/HeaderSaleComponent'
import SlideProductComponent from '../../components/SlideProductComponent/SlideProductComponent'
import { TopHeader } from '../../components/HeaderComponent/style'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import "./style.css";
import CardProductComponent from '../../components/CardProductComponent/CardProductComponent'
const HomePage = () => {
  const [limit, setLimit] = useState(10)
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    return res
  }
  const typeProduct = useQuery({ queryKey: ['type-product'], queryFn: fetchAllTypeProduct })
  const {data: products}= useQuery(['products', limit], fetchProductAll,{retry: 3,retryDelay: 1000})

  const [activeIndex, setActiveIndex] = useState(null);
  const [menuTimeout, setMenuTimeout] = useState(null); 
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    clearTimeout(menuTimeout); 
  };
  const handleMouseLeave = () => {

    const timeout = setTimeout(() => {
      setActiveIndex(null);
    }, 500);

    setMenuTimeout(timeout);
  };
  useEffect(() => {

    return () => {
      clearTimeout(menuTimeout);
    };
  }, [menuTimeout]);
  const [width, setWidth] = useState(1476);
  return (
    <div>
      <Container>
        <HomeAd>
          <MenuBenefits>
            <li onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconHair} alt="" />
                <span>Chăm sóc tóc & da đầu</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>
              {activeIndex === 0 && (
              <CategoryMenuBenefits show={activeIndex === 0}>

                <ul>
                  <br />  
                  <span>Dầu gội- Dầu xả</span>
                  <li><Link to="/">Trị gàu</Link></li>
                  <li><Link to="/">Trị gãy rụng</Link></li>
                  <li><Link to="/">Trị tóc bạc</Link></li>
                  <li><Link to="/">Làm mượt tóc</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Kem ủ</span>
                  <li><Link to="/">Kem ủ phục hồi tóc hư tổn</Link></li>
                  <li><Link to="/">Kem ủ cho tóc nhuộm</Link></li>
                  <li><Link to="/">Kem ủ cho tóc uốn</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Dầu dưỡng tóc</span>
                  <li><Link to="/">Keo xịt tóc</Link></li>
                  <li><Link to="/">Thuốc nhuộm</Link></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconAntiAge} alt="" />
                <span>Chăm sóc da mặt</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>
              {activeIndex === 1 && (
              <CategoryMenuBenefits show={activeIndex === 1}>
                <ul>
                  <br />
                  <span>Chống nắng</span>
                  <li><Link to="/">Dưỡng ẩm/Lotion</Link></li>
                  <li><Link to="/">Mặt nạ</Link></li>
                  <li><Link to="/">Tẩy tế bào chết</Link></li>
                  <li><Link to="/">Xịt khoáng</Link></li>
                  <li><Link to="/">Tinh chất/Serum</Link></li>
                  <li><Link to="/">Sữa rửa mặtToner</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Công dụng</span>
                  <li><Link to="/">Làm sáng da</Link></li>
                  <li><Link to="/">Làm dịu da</Link></li>
                  <li><Link to="/">Chống lão hoá</Link></li>
                  <li><Link to="/">Giảm nếp nhăn</Link></li>
                  <li><Link to="/">Cấp ẩm - Cấp nước</Link></li>
                  <li><Link to="/">Giữ ẩm Trị mụn - thâm</Link></li>
                  <li><Link to="/">Trị nám - Tàn nhang</Link></li>
                  <li><Link to="/">Trị sẹo</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Tẩy trang</span>
                  <li><Link to="/">Khăn/Bông tẩy trang</Link></li>
                  <li><Link to="/">Tẩy trang cho mắt</Link></li>
                  <li><Link to="/">Tẩy trang mặt</Link></li>
                  <li><Link to="/">Tẩy trang môi</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Chăm sóc mắt</span>
                  <li><Link to="/">Thuốc nhỏ mắt</Link></li>
                  <li><Link to="/">Mặt nạ mắt</Link></li>
                  <li><Link to="/">Dưỡng mắt</Link></li>
                  <li><Link to="/">Dưỡng mi mắt / chân mày</Link></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconMakeup} alt="" />
                <span>Trang điểm</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>  
              {activeIndex === 2 && (
              <CategoryMenuBenefits show={activeIndex === 2}>
                <ul>
                  <br />
                  <span>Trang điểm mặt</span>
                  <li><Link to="/">BB - CC - DD Cream</Link></li>
                  <li><Link to="/">Che khuyết điểm</Link></li>
                  <li><Link to="/">Dầu lót - Gel lót</Link></li>
                  <li><Link to="/">Kem lót</Link></li>
                  <li><Link to="/">Kem nền</Link></li>
                  <li><Link to="/">Phấn nền</Link></li>
                  <li><Link to="/">Má hồng</Link></li>
                  <li><Link to="/">Xịt trang điểm</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Trang điểm mắt</span>
                  <li><Link to="/">Kẻ chân mày</Link></li>
                  <li><Link to="/">Che khuyến điểm mắt</Link></li>
                  <li><Link to="/">Kem lót mắt</Link></li>
                  <li><Link to="/">Kẻ mắt</Link></li>
                  <li><Link to="/">Phấn mắt</Link></li>
                  <li><Link to="/">Mascara</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Trang điểm môi</span>
                  <li><Link to="/">Kẻ viền môi</Link></li>
                  <li><Link to="/">Tẩy tế bào chết môi</Link></li>
                  <li><Link to="/">Mặt nạ cho môi</Link></li>
                  <li><Link to="/">Son dưỡng môi</Link></li>
                  <li><Link to="/">Son bóng</Link></li>
                  <li><Link to="/">Son lì</Link></li>
                  <li><Link to="/">Son High End</Link></li>
                  <li><Link to="/">Che khuyết điểm môi</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Dụng cụ trang điểm</span>
                  <li><Link to="/">Cọ/Dụng cụ trang điểm</Link></li>
                  <li><Link to="/">Mút trang điểm</Link></li>
                  <li><Link to="/">Nhíp/Dao cạo</Link></li>
                  <li><Link to="/">Bấm mi</Link></li>
                  <li><Link to="/">Lông mi giả</Link></li>
                  
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconPersonalHygiene} alt="" />
                <span>Chăm sóc cơ thể</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>
              {activeIndex === 3 && (
              <CategoryMenuBenefits show={activeIndex === 3}>
                <ul>
                  <br />
                  <span>Dưỡng thể</span>
                  <li><Link to="/">Sữa tắm</Link></li>
                  <li><Link to="/">Tẩy tế bào chết Body</Link></li>
                  <li><Link to="/">Chống nắng body</Link></li>
                  <li><Link to="/">Xà bông tắm</Link></li>
                  <li><Link to="/">Tinh dầu</Link></li>

                </ul>
                <ul>
                  <br />
                  <span>Chăm sóc răng miệng</span>
                  <li><Link to="/">Kem đánh răng</Link></li>
                  <li><Link to="/">Bàn chải đánh răng</Link></li>
                  <li><Link to="/">Nước súc miệng</Link></li>
                  <li><Link to="/">Trị hôi miệng</Link></li>
                </ul>
                <ul>
                  <br />
                  <span>Khử mùi</span>
                  <li><Link to="/">Lăn khử mùi</Link></li>
                  <li><Link to="/">Sáp khử mùi</Link></li>
                </ul>                
                <ul>
                  <br />
                  <span>Vệ sinh phụ nữ</span>
                  <li><Link to="/">Băng vệ sinh</Link></li>
                  <li><Link to="/">Dung dịch vệ sinh</Link></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconPerfumeBottle} alt="" />
                <span>Nước hoa</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>
              {activeIndex === 4 && (
              <CategoryMenuBenefits show={activeIndex === 4}>
                <ul>
                  <br />
                  <li><Link to="/">Nước hoa mini</Link></li>
                  <li><Link to="/">Nước hoa nam</Link></li>
                  <li><Link to="/">Nước hoa nữ</Link></li>
                  <li><Link to="/">Nước hoa Unisex</Link></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}>
              <Link to="/">
                <img src={iconFunctionalFoods} alt="" />
                <span>Thực phẩm chức năng</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </Link>
              {activeIndex === 5 && (
              <CategoryMenuBenefits show={activeIndex === 5}>
                <ul>
                  <br />
                  <li><Link to="/">Hỗ trợ điều trị bệnh</Link></li>
                  <li><Link to="/">Hỗ trợ giảm cân</Link></li>
                  <li><Link to="/">Hỗ trợ làm đẹp</Link></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li> 
          </MenuBenefits>
          <BannerMain>
            <img src={bannerMain} alt="Banner AD" />
          </BannerMain>
          <BannerRight>
            <img src={bannerRight} alt="Banner AD" />
          </BannerRight>
        </HomeAd>
        <br /><br />
        <br /><br />
        <HeaderSaleComponent/>
        <br /><br />
       <SlideProductComponent products={products} />
       
        <br /><br />
        {/* <div style={{margin: '20px 30px'}}>
          <h2>DANH MỤC SẢN PHẨM</h2>
          {typeProduct?.data?.data.map((product,limit) => {
              return (
                <CardTypeProductComponent
                typeProducts={product}
                />
              )
            })}
        </div> */}
        <BrandProduct>
          <BrandProductName>
            <h1>THƯƠNG HIỆU NỔI BẬT</h1>
            <p>BoShop tự hào là Đại lí phân phối chính thức của hơn 100 thương hiệu mỹ phẩm hàng đầu</p>
            <Link to="/">Xem tất cả thương hiệu*7+</Link>
          </BrandProductName>
          {/* <SlideBrandComponent /> */}
        </BrandProduct>
        <img src={posterSupport} alt=""  style={TopHeader}/>
        <div style={{position: 'relative' ,margin: '20px 30px'}}>
          <h2>BEST SELLER</h2>
          <div className="groupButton">
            <button
            className= 'button'
            onClick={() => {
            
              setWidth(1476);
            }}
          >
            Trang điểm môi
            </button>
            <button
              className= 'button'
              onClick={() => {
              
                setWidth(1476);

              }}
            >
              Trang điểm mắt
            </button>
            <button
              className= 'button'
              onClick={() => {
              
                setWidth(1476);

              }}
            >
              Trang điểm mặt
            </button>
          </div>
        </div>

        <BestSeller>
          {products?.data?.map((product,limit) => {
              return (
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
                  gift = {product.gift}
                />
              )
            })}
          <br />
        </BestSeller>
        <div style={{textAlign: 'center'}}>
          <a className='seeMore' href={"Products"}>Xem thêm <img src={iconArrow} alt="" style={{fontSize: '16px',color: 'var(--orangin)', border: '2px solid var(--orangin)'}}/></a>
        </div>
      </Container>
    </div>
  )
}

export default HomePage