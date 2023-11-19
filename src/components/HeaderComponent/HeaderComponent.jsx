
import React, { useEffect, useRef, useState } from 'react'
import posterMain from '../../assets/images/posterMain.webp'
import {MenuMain ,TopHeader , ChooseUse, LogoShop, SearchProduct, IconContact, Logout, AccountUser, WrapperTextHeaderSmall, ResultProduct, ListProduct} from './style'
import logoMain from '../../assets/images/logoMain.png'
import iconPhone from '../../assets/images/icon-telephone.svg'
import iconAccount from '../../assets/images/icon-login.svg'
import { FormSearch } from './style'
import '../../index.css'
import * as ProductService from '../../services/ProductService'
import {
  SearchOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import { Container } from '../ContainerComponent/ContainerComponent'
import { Badge, Button, Col, Input, Popover, Row, Spin, TreeSelect, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { WrapperHeaderItem } from '../../pages/MyOrder/style'
import { convertPrice } from '../../utils'
const HeaderComponent = () => {
  const order = useSelector((state) => state.order)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search,setSearch] = useState('')
  const [resultProduct, setResultProduct] = useState([])
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate()
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const handleLogout = async() =>{
    await UserService.logOutUser
    dispatch(resetUser())
  }
  useEffect(() => {
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
  }, [user?.name, user?.avatar])
  const content = (
    <div>
        <Logout onClick={() => handleClickNavigate()}>Đăng xuất</Logout>
        <Logout onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</Logout>
        {user?.isAdmin && (
          <Logout onClick={() => handleClickNavigate('admin')}>Quản lý hệ thống</Logout>
        )}
         <Logout onClick={() => handleClickNavigate(`my-order`)}>Giỏ hàng của tôi</Logout>
    </div>
  );
  const handleClickNavigate = (type) => {
    if(type === 'profile') {
      navigate('/profile-user')
    }else if(type === 'admin') {
      navigate('/system/admin')
    }else if(type === 'my-order') {
      navigate('/my-order',{ state : {
          id: user?.id,
          token : user?.access_token
        }
      })
    }else {
      handleLogout()
      navigate('/')
    }
    setIsOpenPopup(false)
  }
  const fetchProduct = async (name) => {
    const res = await ProductService.getAllProduct(name)
    if(res?.status == 'OK') {
      console.log('res?.data?.[0]?.name', res?.data?.[0]?.name)
      setResultProduct(res?.data)
    }
    if(!res?.data?.[0]?.name){
      message.error("Không có sản phẩm này")
    }

  }
  useEffect(() => {
    if (isSearching) {
      fetchProduct(search);
      // setIsSearching(false); 
    }
  }, [search, isSearching]);

  const handleSearch = () => {
    setIsSearching(true); 
    const myElement = document.getElementById('result');

  };
  const renderProduct = (data) => {
    return data?.map((product) => {
      return <ListProduct key={product?._id} onClick={() => navigate(`/ProductDetails/${product?._id}`)}> 
              <img src={product?.image} 
                style={{
                  width: '30px', 
                  height: '30px', 
                  objectFit: 'cover',
                  border: '1px solid rgb(238, 238, 238)',
                  padding: '2px'
                }}
              />
              <div style={{
                width: 260,
                overflow: 'hidden',
                textOverflow:'ellipsis',
                whiteSpace:'nowrap',
                marginLeft: '10px'
              }}>{product?.name}</div>
              <span style={{ fontSize: '13px', color: '#242424',marginLeft: 'auto' }}>{convertPrice(product?.price)}</span>
            </ListProduct>
          })
  }
  const resultProductRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resultProductRef.current && !resultProductRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    };
  
    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);
  
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resultProductRef]);
  
  return (
    <div>
        <Container>
          <Row>
            <Col span={24}><img src={posterMain} alt="poster"  style={TopHeader}/></Col>
          </Row>
          <MenuMain>
            <Link to="/"><img src={logoMain} alt="logo Shop" style={LogoShop}/></Link>
            <SearchProduct>
              <FormSearch >
                <Input onChange={(e) => setSearch(e.target.value)}  autoComplete="on" placeholder='Tìm kiếm...' style={{height: '43px', borderRadius: '10px 0 0 10px', background: 'rgba(203, 96, 136, 0.15)', border: 'none'}}></Input>
                <Button onClick={handleSearch} type='primary' style={{height: '43px', width: '64px', background:'var(--pink)', borderRadius: '0 10px 10px 0'}}><SearchOutlined /></Button>
              </FormSearch>
                <ResultProduct style={{ display: isSearching ? 'block' : 'none' }}
                   ref={resultProductRef}>
                  {resultProduct.length > 0 ?(
                    renderProduct(resultProduct)
                  ):(
                    <div style={{textAlign: 'center', lineHeight: '95px'}}>
                      <Spin />
                    </div>
                  )
                  }
                </ResultProduct>
              <ChooseUse>
                <Link to="/ProductsPage/chamsoc da">Chăm sóc da</Link>
                <Link to="/ProductsPage/kemchongnang">Kem chống nắng</Link>
                <Link to="/ProductsPage/salevalentine">Sale Valentine</Link>
                <Link to="/ProductsPage/xitkhoang">Xịt khoáng</Link>
                <Link to="/ProductsPage/fanya">Fanya</Link>
              </ChooseUse>
            </SearchProduct>
              <IconContact href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPhone} alt=""/>
                <span style={{color: 'var(--black)', lineHeight: '30px', fontSize: '14px',borderRight: '1px solid var(--black)',padding:'0 30px'}}>1900 7101</span>
              </IconContact>
              <AccountUser>
                <Link to="/Signin" style={{display: 'flex', alignItems: 'center'}}>
                  {userAvatar ? (
                    <img src={userAvatar} alt="avatar" style={{
                      height: '30px',
                      width: '30px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }} />
                  ) : (
                    <img src={iconAccount} alt=""/>
                  )}
                </Link>
                {user?.access_token ? (
                  <Popover content={content} trigger="click">
                    <span style={{marginLeft: '5px',fontSize: '14px'}}>{userName?.length ? userName : user?.email}</span>
                  </Popover>
                ) : (
                  <div>
                    <span id='nameUser' style={{marginLeft: '5px',fontSize: '14px'}}>Đăng nhập/ Đăng kí</span>
                  </div>
                )}
              </AccountUser>

                <Link to = "/order">
                  <Badge count={order?.orderItems?.length} size="small">
                    <ShoppingCartOutlined style={{ fontSize: '30px'}} />
                  </Badge>
                  <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                </Link>
          </MenuMain>
        </Container>
    </div>
  )
}

export default HeaderComponent