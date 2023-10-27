import styled from "styled-components";
import '../../index.css'
export const ProductDetails = styled.div`
    margin: 0 30px;
    .AddrestProduct{
        background-color: #F5F6F9;
        font-size: 16px;
        padding: 5px 10px;
        border-radius: 10px;  
    }    
    h4{
        max-width: 503px;
        margin: 10px 0
    }
`
export const WatchProduct = styled.div`
    max-width: 600px;
    img{
        width: 100%;
    }
    img{
        cursor: pointer;
    }
`
export const InforProduct = styled.div`
    font-size: 16px;
`
export const QuantityBuy = styled.div`
    display: flex;
    .count{
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid var(--black);
        margin: 0 5px;
    }
    button{
        padding: 10px;
        background: var(--gray);
        border-radius: 5px;
        cursor: pointer;
    }
`
export const Choice = styled.div`
    display: flex;
    justify-content: space-evenly;
    button{
        border-radius: 10px;
        border: none;
        padding: 15px 30px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.7s ease-in-out;
    }
    button:hover{
        opacity: 0.7;
    }
    .addCart{
        color: var(--white);
        background: #781919;
    }
    .buyNow{
        background: #BBD66A;
    }
`
export const Parameters = styled.div`
    display:flex;
    font-size: 16px;
    font-weight: 600;
    .name{
        background: #F7F7F7;
        width: 35%;
    }
    .content{
        width: 65%;
    }
    li{
        list-style: none;
        border: 1px solid #F4F4F4;
        padding: 10px;
    }
`