import styled from "styled-components";
import '../../index.css'
export const HeaderSaleTime = styled.div`
    background: var(--orange);
    color: var(--white);
    border-radius: 10px 10px 0 0;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
`
export const SaleTimeLeft = styled.div`
    display: flex;
    align-items: center;
    padding: 5px 0;
    color: var(--white);
    img{
        font-size: 30px;
        padding: 5px;
    }
    p{
        margin: 0;
        border-right: 1px solid var(--white);
        padding-right: 20px;
    }
`
export const SaleTimeRight = styled.div`
    display: flex;
    align-items: center;
    a{
        border-radius: var(--border-radius);
        background: #B8D77A;
        padding: 5px 10px;
        margin-right: 10px;
    }
`
export const TimeSale = styled.span`
    border-radius: var(--border-radius);
    background: var(--white);
    color: var(--black);
    padding: 5px;
    margin: 0 5px;
`