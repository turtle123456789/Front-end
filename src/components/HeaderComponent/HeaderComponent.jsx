
import React from 'react'
import posterMain from '../../assets/images/posterMain.webp'
import {MenuMain ,TopHeader ,IconMenu ,LinkFilter, ChooseUse, LogoShop, SearchProduct, IconContact} from './style'
import logoMain from '../../assets/images/logoMain.png'
import iconPhone from '../../assets/images/icon-telephone.svg'
import iconHeart from '../../assets/images/icon-heart.svg'
import iconAccount from '../../assets/images/icon-login.svg'
import iconShopCar from '../../assets/images/icon-shopping_cart.svg'
import { FormSearch } from './style'
import '../../index.css'
import {
  SearchOutlined
} from '@ant-design/icons';
import { Container } from '../ContainerComponent/ContainerComponent'
import { Button, Col, Input, Row } from 'antd'

const HeaderComponent = () => {

  return (
    <div>
        <Row>
          <Col span={24}><img src={posterMain} alt="poster"  style={TopHeader}/></Col>
        </Row>
        <Container>
          <MenuMain>
            <LinkFilter><IconMenu></IconMenu></LinkFilter>
            <a href={"https://www.facebook.com/profile.php?id=100057094481241"}><img src={logoMain} alt="logo Shop" style={LogoShop}/></a>
            <SearchProduct>
              <FormSearch >
                <Input placeholder='Tìm kiếm...' style={{height: '43px', borderRadius: '10px 0 0 10px', background: 'rgba(203, 96, 136, 0.15)', border: 'none'}}></Input>
                <Button type='primary' style={{height: '43px', width: '64px', background:'var(--pink)', borderRadius: '0 10px 10px 0'}}><SearchOutlined /></Button>
              </FormSearch>
              <ChooseUse>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Chăm sóc da</a>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Kem chống năng</a>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Sale valentine</a>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xịt khoáng</a>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Fanya</a>
              </ChooseUse>
            </SearchProduct>
              <IconContact href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconPhone} alt=""/>
                <span style={{color: 'var(--black)', lineHeight: '30px', fontSize: '14px',borderRight: '1px solid var(--black)',padding:'0 30px'}}>1900 7101</span>
              </IconContact>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconHeart} alt=""/>
              </a>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconAccount} alt=""/>
              </a>
              <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>
                <img src={iconShopCar} alt=""/>
              </a>
          </MenuMain>
        </Container>
    </div>
  )
}

export default HeaderComponent