import styled from "styled-components";

export const CartWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 320px;
    box-shadow: 0 2px 6px rgb(120,120,120);
    margin-bottom: 15px;
    border-radius: 20px;
    overflow: hidden;

    ${({theme}) => theme.mq.tablet}{
        margin: 0 10px 10px;
        width: calc(50% - 20px);
    }
    ${({theme}) => theme.mq.desktop}{
        width: calc(33% - 20px);
    }
`

export const CartImage = styled.img`
    height: 200px;
    width: 100%;
    object-fit: cover;
`

export const CartContent = styled.div`
    padding: 10px 8px;

    ${({theme}) => theme.mq.desktop}{
        padding: 10px 20px;
    }
`

export const CartTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;

    span:first-child{
        font-weight: bold;
        color: rgba(44,44,44);
    }

    span:nth-child(2){
        color: rgba(110,110,110);
    }
`

export const CartButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 0;

    div:first-child{
        display: flex;
        align-items: center;
        margin-bottom: 2px;

        span{
            margin: 0 3px;
            font-size: 1.1rem;

            :nth-child(2){
                font-weight: bold;
                margin-left: 15px;
            }
            :nth-child(3){
                margin-right: 15px;
            }
        }


    }
    `