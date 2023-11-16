import React from 'react'
import {  HeaderSaleTime, SaleTimeLeft, SaleTimeRight } from './style'
import thunder1 from '../../assets/images/thunder 1.svg'
import SaleTimer from './TimeSale'
import { Link } from 'react-router-dom'

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
                <Link to="/Products">Xem thêm</Link>
            </SaleTimeRight>
        </HeaderSaleTime>
    </div>
  )
}

export default HeaderSaleComponent