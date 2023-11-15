
import React, { useEffect, useState } from 'react'
import posterMain from '../../assets/images/posterMain.webp'
import {MenuMain ,TopHeader , ChooseUse, LogoShop, SearchProduct, IconContact, Logout, AccountUser, WrapperTextHeaderSmall} from './style'
import logoMain from '../../assets/images/logoMain.png'
import iconPhone from '../../assets/images/icon-telephone.svg'
import iconAccount from '../../assets/images/icon-login.svg'
import iconShopCar from '../../assets/images/icon-shopping_cart.svg'
import { FormSearch } from './style'
import '../../index.css'
import {
  SearchOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import { Container } from '../ContainerComponent/ContainerComponent'
import { Badge, Button, Col, Input, Popover, Row } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { searchProduct } from '../../redux/slides/productSlide'
const HeaderComponent = () => {
  const order = useSelector((state) => state.order)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search,setSearch] = useState('')
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
        <Logout onClick={handleLogout}>Đăng xuất</Logout>
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
    }
    setIsOpenPopup(false)
  }
  const onSearch = (e) => {
    setSearch(e.target.value)

  }
  const handleSearchButtonClick = (e)=>{

    dispatch(searchProduct(search))
  }
  return (
    <div>
        <Container>
          <Row>
            <Col span={24}><img src={posterMain} alt="poster"  style={TopHeader}/></Col>
          </Row>
          <MenuMain>
            <a href={"/"}><img src={logoMain} alt="logo Shop" style={LogoShop}/></a>
            <SearchProduct>
              <FormSearch >
                <Input  onChange={onSearch}  autoComplete="on" placeholder='Tìm kiếm...' style={{height: '43px', borderRadius: '10px 0 0 10px', background: 'rgba(203, 96, 136, 0.15)', border: 'none'}}></Input>
                <Button onClick={handleSearchButtonClick} type='primary' style={{height: '43px', width: '64px', background:'var(--pink)', borderRadius: '0 10px 10px 0'}}><SearchOutlined /></Button>
              </FormSearch>
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