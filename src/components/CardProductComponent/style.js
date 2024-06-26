import styled from "styled-components";
import '../../index.css'
export const ProductImg = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 234px;
        width: 250px;
        border-radius: 10px;
    }
`
export const FormShip = styled.div`
    span{
        color: var(--white);
        border-radius: 10px;
        padding: 0 10px;
    }
`
export const ProductName = styled.div`
`
export const ProductContent = styled.div`
    a{
        font-size: 16px;
    }
`
export const ProductPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-size: 16px;
    }
    .originalPrice{
        color: #6B1D14;
        font-weight: 500;
    }
    .discountedPrice{
        color: #848484;
        text-decoration: line-through;
        padding-left: 5px;
    }
    .discountPercentage{
        background: #BBD66A;
        color: var(--white);
        border-radius: 50%;
        height: 30px;
        width: 30px;
        font-size: 10px;
        line-height: 30px;
        text-align: center;
    }
`
export const LevelOfLiking = styled.div`
    display: flex;
    justify-content: space-between;
    .review{
        display: flex;
        align-items: center;
    }
    .quantity{
        display: flex;
    }
    .quantity img{
        border-left: 2px solid var(--black);
        padding: 0 10px;
    }
`
export const GiftSale = styled.div`
    border: 2px dashed var(--orange-sale);
    span{
        color: var(--orange-sale);
        padding-left: 10px;
        padding-right: 20px;
        font-size: 12px;
    }
`