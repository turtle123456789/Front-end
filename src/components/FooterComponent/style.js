import styled from "styled-components";
import '../../index.css'
import { Form } from "antd";
export const Policy = styled.div`
    display: flex;
    background: #FFF5F5;
    justify-content: space-evenly;
    div{
        max-width: 25% ;
        text-align: center;
    }
    img{
        width: 100%;
        max-width: 64px;
    }
    p{
        color: var(--black);
        font-family: SF Pro Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    span{
        color: var(--black);
        font-family: SF Pro Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }
`
export const BodyFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    p{
        color: var(--black);
        text-align: justify;
        font-family: SF Pro Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px; /* 200% */
    }
    span{
        color: var(--black);
        font-family: SF Pro Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
    }
    li{
        list-style: none;
        display: flex;
        color: var(--black);
        font-family: SF Pro Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 10px;
    }
    a:hover{
        opacity: 0.7;
    }
    img{
        width: 100%
        max-width: 28px;
        margin-right: 10px;
    }
`
export const FormEmail = styled(Form)`
    .button{
        margin-left: -6%;
        height: 40px;
        width: 110px;
        border-radius: 10px;
        background-color: #C83F51;
        padding-top: 7px;
    }
    .input{
        max-width: 150px;
        height: 40px;
        border-radius: 10px;
        z-index: 1;
    }
`