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
        display: flex;
    }
    a{
        font-weight: 500;
        line-height: 19px;
        display: inline-flex;
        width: 100%;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
    span{
        margin-left: 5px 18px;
        font-size: 16px;
    }

`
export const CategoryMenuBenefits = styled.div`
    display: flex;
    position: absolute;
    background: var(--white);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    height: 100%;
    width: calc(100% - 350px);
    top: 0;
    right: ${(props) => (props.show ? '0' : '-100%')};
    transition: right 0.5s ease;
    animation: slide-in 1s ease forwards; // Thêm animation slide-in
    /* ... */
    
    @keyframes slide-in {
      from {
        right: -100%; // Vị trí ban đầu (điều này có thể điều chỉnh)
      }
      to {
        right: 0; // Vị trí cuối cùng (điều chỉnh cho phù hợp)
      }
    }
    span{
        color: var(--black);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    li{
        color: var(--black);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 36px; /* 225% */
    }
    a{
        border: none;
    }
    a:hover{
        opacity: 0.7;
        
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
    margin: 20px 0;
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
export const BrandProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 30px;
`
export const BrandProductName = styled.div`
    max-width: 400px;
    p{
        font-size: 18px;
    }
    a{
        color: #4E6FB0;
        font-size: 13px;
    }
}
`
export const BestSeller = styled.div`
    margin: 20px 30px;
    position: relative;
    display: block;
    .seeMore{
        font-size: 16px;
        color: var(--orange);
        border-radius: 10px;
        border: 2px solid var(--orange);
        padding: 5px 20px;
    }
    .seeMore:hover{
        opacity: 0.8;
    }
`