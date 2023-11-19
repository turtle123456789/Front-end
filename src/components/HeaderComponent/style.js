import {  Form } from "antd";
import styled from "styled-components";
import '../../index.css'

export const TopHeader = {
    // Các thuộc tính CSS khác ở đây
    width: '100%',
    overflow: 'hidden',
};
export const LogoShop = {
    maxWidth: '224px',
    minWidth: '223px'
};
export const MenuMain = styled.div`
    display: flex;
    justify-content: space-evenly   ;
    align-items: center;
    padding: 20px 0;

`
export const LinkFilter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    width: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    position: relative;
`
export const IconMenu = styled.div`
    height: 1px;
    width: 31px;
    position: absolute;
    position: relative;
    background-color: #000;
    cursor: pointer;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        bottom: 10px;
        height: 1px;
        width: 31px;
        background-color: #000;
    }
    &::after{
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        height: 1px;
        width: 31px;
        background-color: var(--black);
    }
`
export const SearchProduct = styled.div`
    display: flex;
    max-width: 674px;
    padding-top: 24px;
    flex-wrap: wrap;
`
export const ChooseUse = styled.div`
    a{
        font-size: 12px;
        font-family: 'Roboto Condensed', sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #818181;
        margin-right: 20px;
    }
`
export const FormSearch = styled(Form)`
    width: 100%;
    display: flex;
    
`
export const IconContact = styled.a`
    display: flex;
`
export const Logout = styled.p`
    cursor: pointer;
    font-weight: 600;
    &:hover{
        color: var(--pink);
    }
`
export const AccountUser = styled.div`
    display: flex;
    align-items: center;
    span{
        cursor: pointer;
    }
`
export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: var(--black);
    white-space: nowrap;
`
export const ResultProduct = styled.div`
    min-height: 95px;
    background: var(--white);
    position: absolute;
    width: 100%;
    max-width: 635px;
    top: 165px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0px 0px 2px 2px  #888888;
    padding: 0 20px;
    overflow-y: auto;
    max-height: 250px;
`
export const ListProduct = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 100%;
    border-bottom: 1px dotted;
    cursor: pointer;
    &&:hover{
        background: rgba(0,0,0,.03) ;
    }
`