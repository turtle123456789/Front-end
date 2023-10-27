import styled from "styled-components";
import '../../index.css'
export const InforShip = styled.div`
    display: flex;
    margin: 0 30px;
    .infor{
        width: 60%;
        padding: 20px;
    }
    .cart{
        width: 40%;
    }
    button{
        background: #362962;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        span{
            color: var(--white)
        }
    }
li{
    display: flex;
    align-items: center;
    img{
        margin: 0 10px;
    }
}

`