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
import posterSupport from '../../assets/images/poster1.webp'
import HeaderSaleComponent from '../../components/HeaderSaleComponent/HeaderSaleComponent'
import SlideProductComponent from '../../components/SlideProductComponent/SlideProductComponent'
import { typeProductData } from '../../Data/TypeProductData'
import SlideBrandComponent from '../../components/SlideBrandComponent/SlideBrandComponent'
import { brandsData } from '../../components/BrandData'
import { TopHeader } from '../../components/HeaderComponent/style'
import LayoutTypeProductComponent from '../../components/LayoutTypeProductComponent/LayoutTypeProductComponent'
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
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconHair} alt="" />
                <span>Chăm sóc tóc & da đầu</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
              {activeIndex === 0 && (
              <CategoryMenuBenefits show={activeIndex === 0}>
                <ul>
                  <br />
                  <span>Dầu gội- Dầu xả</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị gàu</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị gãy rụng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị tóc bạc</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Làm mượt tóc</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Kem ủ</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem ủ phục hồi tóc hư tổn</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem ủ cho tóc nhuộm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem ủ cho tóc uốn</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Dầu dưỡng tóc</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Keo xịt tóc</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Thuốc nhuộm</a></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconAntiAge} alt="" />
                <span>Chăm sóc da mặt</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
              {activeIndex === 1 && (
              <CategoryMenuBenefits show={activeIndex === 1}>
                <ul>
                  <br />
                  <span>Chống nắng</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Dưỡng ẩm/Lotion</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Mặt nạ</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy tế bào chết</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xịt khoáng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tinh chất/Serum</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Sữa rửa mặtToner</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Công dụng</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Làm sáng da</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Làm dịu da</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chống lão hoá</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Giảm nếp nhăn</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Cấp ẩm - Cấp nước</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Giữ ẩm Trị mụn - thâm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị nám - Tàn nhang</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị sẹo</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Tẩy trang</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Khăn/Bông tẩy trang</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy trang cho mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy trang mặt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy trang môi</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Chăm sóc mắt</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Thuốc nhỏ mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Mặt nạ mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Dưỡng mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Dưỡng mi mắt / chân mày</a></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconMakeup} alt="" />
                <span>Trang điểm</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>  
              {activeIndex === 2 && (
              <CategoryMenuBenefits show={activeIndex === 2}>
                <ul>
                  <br />
                  <span>Trang điểm mặt</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>BB - CC - DD Cream</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Che khuyết điểm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Dầu lót - Gel lót</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem lót</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem nền</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Phấn nền</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Má hồng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xịt trang điểm</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Trang điểm mắt</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kẻ chân mày</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Che khuyến điểm mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem lót mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kẻ mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Phấn mắt</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Mascara</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Trang điểm môi</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kẻ viền môi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy tế bào chết môi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Mặt nạ cho môi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Son dưỡng môi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Son bóng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Son lì</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Son High End</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Che khuyết điểm môi</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Dụng cụ trang điểm</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Cọ/Dụng cụ trang điểm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Mút trang điểm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nhíp/Dao cạo</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Bấm mi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Lông mi giả</a></li>
                  
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPersonalHygiene} alt="" />
                <span>Chăm sóc cơ thể</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
              {activeIndex === 3 && (
              <CategoryMenuBenefits show={activeIndex === 3}>
                <ul>
                  <br />
                  <span>Dưỡng thể</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Sữa tắm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tẩy tế bào chết Body</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chống nắng body</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xà bông tắm</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Tinh dầu</a></li>

                </ul>
                <ul>
                  <br />
                  <span>Chăm sóc răng miệng</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem đánh răng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Bàn chải đánh răng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nước súc miệng</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Trị hôi miệng</a></li>
                </ul>
                <ul>
                  <br />
                  <span>Khử mùi</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Lăn khử mùi</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Sáp khử mùi</a></li>
                </ul>                
                <ul>
                  <br />
                  <span>Vệ sinh phụ nữ</span>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Băng vệ sinh</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Dung dịch vệ sinh</a></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPerfumeBottle} alt="" />
                <span>Nước hoa</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
              {activeIndex === 4 && (
              <CategoryMenuBenefits show={activeIndex === 4}>
                <ul>
                  <br />
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nước hoa mini</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nước hoa nam</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nước hoa nữ</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Nước hoa Unisex</a></li>
                </ul>
              </CategoryMenuBenefits >
              )}
            </li>
            <li onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={handleMouseLeave}>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconFunctionalFoods} alt="" />
                <span>Thực phẩm chức năng</span>
                <img src={iconVector} style={{marginLeft: 'auto'}} alt="" />
              </a>
              {activeIndex === 5 && (
              <CategoryMenuBenefits show={activeIndex === 5}>
                <ul>
                  <br />
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Hỗ trợ điều trị bệnh</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Hỗ trợ giảm cân</a></li>
                  <li><a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Hỗ trợ làm đẹp</a></li>
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
        <br /><br />
        <HeaderSaleComponent/>
        <br /><br />
       <SlideProductComponent products={products} />
       
        <br /><br />
        <div style={{margin: '20px 30px'}}>
          <h2>DANH MỤC SẢN PHẨM</h2>
          <LayoutTypeProductComponent TypeProductData={typeProductData} />
        </div>
        <BrandProduct>
          <BrandProductName>
            <h1>THƯƠNG HIỆU NỔI BẬT</h1>
            <p>BoShop tự hào là Đại lí phân phối chính thức của hơn 100 thương hiệu mỹ phẩm hàng đầu</p>
            <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xem tất cả thương hiệu*7+</a>
          </BrandProductName>
          <SlideBrandComponent brands={brandsData}/>
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