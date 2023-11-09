
import React, { useEffect, useState } from 'react'
import posterMain from '../../assets/images/posterMain.webp'
import {MenuMain ,TopHeader , ChooseUse, LogoShop, SearchProduct, IconContact, Logout, AccountUser} from './style'
import logoMain from '../../assets/images/logoMain.png'
import iconPhone from '../../assets/images/icon-telephone.svg'
import iconAccount from '../../assets/images/icon-login.svg'
import iconShopCar from '../../assets/images/icon-shopping_cart.svg'
import { FormSearch } from './style'
import '../../index.css'
import {
  SearchOutlined
} from '@ant-design/icons';
import { Container } from '../ContainerComponent/ContainerComponent'
import { Button, Col, Input, Popover, Row } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
const HeaderComponent = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
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
        <Link to="/profile-user"><Logout>Thông tin người dùng</Logout></Link>
        {user?.isAdmin && (
          <Link to="/system/admin"><Logout>Quản lý hệ thống</Logout></Link>
        )}
    </div>
  );
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
                <Input placeholder='Tìm kiếm...' style={{height: '43px', borderRadius: '10px 0 0 10px', background: 'rgba(203, 96, 136, 0.15)', border: 'none'}}></Input>
                <Button type='primary' style={{height: '43px', width: '64px', background:'var(--pink)', borderRadius: '0 10px 10px 0'}}><SearchOutlined /></Button>
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
              <Link to="/CartPage">
                <img src={iconShopCar} alt=""/>
              </Link>
          </MenuMain>
        </Container>
    </div>
  )
}

export default HeaderComponent