import styled from "styled-components";

type ShoppingCartWrapperProps = {
    isOpen: boolean;
}

export const ShoppingCartWrapper = styled.div<ShoppingCartWrapperProps>`
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    box-shadow: 0 2px 2px rgb(200,200,200);
    background-color: white;
    z-index: 2;
    transform: ${(props) => props.isOpen ? " translateX(0)" : "translateX(100%)"};
    transition: transform .2s;
    border-left: 1px solid gray;

    ${({theme}) => theme.mq.desktop}{
        width: 600px;
    }
`

export const ShoppingCartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    padding: 0 1.8rem;

    span{
        font-size: 1.6rem;
        font-weight: bold;
    }
`