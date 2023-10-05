import React from 'react'
import {  HeaderSaleTime, SaleTimeLeft, SaleTimeRight } from './style'
import thunder1 from '../../assets/images/thunder 1.svg'
import SaleTimer from './TimeSale'

const HeaderSaleComponent = () => {
  return (
    <div>
        <HeaderSaleTime>
            <SaleTimeLeft>
                <img src={thunder1} alt="" />
                <p>HOT DEAL ĐANG DIỄN RA</p>
                <span style={{margin: '0 20px'}}>Kết thúc trong</span>
                <SaleTimer/>
            </SaleTimeLeft>
            <SaleTimeRight>
                <a href={"https://www.facebook.com/profile.php?id=100057094481241"}>Xem thêm</a>
            </SaleTimeRight>
        </HeaderSaleTime>
    </div>
  )
}

export default HeaderSaleComponent