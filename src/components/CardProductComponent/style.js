import styled from "styled-components";
import '../../index.css'
export const ProductImg = styled.div`
    max-width: 269px;
    img{
        width: 100%;
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
    margin-bottom: 10px;
`
export const ProductContent = styled.div`
    margin-bottom: 10px;
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
    .quantity img{
        border-left: 2px solid var(--black);
        padding-left: 10px;
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