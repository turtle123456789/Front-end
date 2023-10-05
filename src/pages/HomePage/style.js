import styled from "styled-components";
import '../../index.css'
export const HomeAd = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`
export const MenuBenefits = styled.ul`
padding: 0;
    li{
        list-style: none;
        margin-bottom: 24px;
        width: 282px;
    }
    a{
        font-weight: 500;
        line-height: 19px;
        display: inline-flex;
        width: 100%;
        align-items: center;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
    span{
        margin-left: 18px;
        font-size: 16px;
    }
`
export const BannerMain = styled.div`
    max-width: 674px;
    img{
        width: 100%;
        boder-radius: 10px;
    }
`
export const BannerRight = styled.div`
    max-width: 354px;
    img{
        width: 100%;
        boder-radius: 10px;
    }
`
export const MenuEven = styled.div`
    display: flex;
    justify-content: space-around;
    img{
        max-width: 66px;
        max-height: 66px;
        border-radius: 10px;
    }
    a{
        flex-direction: column;
        align-items: center;
        display: flex;
    }
    span{
        font-size: 14px;
    }
`
export const ListTypeProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 100%;
    gap: 50px;
`