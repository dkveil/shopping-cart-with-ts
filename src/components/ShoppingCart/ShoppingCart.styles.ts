import styled from "styled-components";

type ShoppingCartWrapperProps = {
    isOpen: boolean;
}

export const ShoppingCartWrapper = styled.div<ShoppingCartWrapperProps>`
    position: fixed;
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
    padding: 0 1.8rem;

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

    span{
        font-size: 1.6rem;
        font-weight: bold;
    }
`

export const ShoppingCartContent = styled.div`
    overflow-y: scroll;
    max-height: 520px;
`

export const ShoppingCartPriceWrapper = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: gray;
    padding: 1rem 0;
    text-align: right;
`