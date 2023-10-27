import styled from "styled-components";
import '../../index.css'
export const LayoutSigin = styled.div`
    margin:0 150px;
    button{
        background: var(--pink);
        padding: 10px 30px; 
        border-radius: 10px; 
        cursor: pointer; 
        margin: 20px;
    }
`
export const MethodRegister= styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px dotted rgb(204, 204, 204);
    padding-bottom: 10px;
    a{
        height:40px;
        display: flex;
        align-items: center;
        min-width: 200px;
        margin-right: 50px;
        img{
            width:36px;
        }
    }
    .Facebook{
        background: #364f88;
    }
    .Google{
        background: #ce3e26;
    }
`