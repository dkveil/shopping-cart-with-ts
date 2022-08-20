import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: calc(140px + 2.4rem);
    width: 100%;
    padding: 1.2rem 0;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;

    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem 1rem;
        font-size: .9rem;
        padding-right: 0;

        ${({theme}) => theme.mq.desktop}{
            font-size: 1.1rem;
            padding: 1rem 1rem;
        }


        span{
            :first-child{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 1.2rem;
                width: 100%;
                text-transform: uppercase;

                ${({theme}) => theme.mq.desktop}{
                    font-size: 1.5rem;
                }
            }
            :nth-child(3){
                font-size: 1rem;
                color: gray;
            }
        }

        div{
            padding: .7rem 0;
            flex-direction: row;
            gap: .5rem;
        }

    }
`

export const Image = styled.img`
    height: 100%;
    width: 140px;
    object-fit: cover;
    
    ${({theme}) => theme.mq.desktop}{
        width: 220px;
    }
`