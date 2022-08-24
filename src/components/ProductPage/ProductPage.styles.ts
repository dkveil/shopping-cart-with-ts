import styled from "styled-components"
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    padding: 4rem 2rem;
    display: flex;
    box-shadow: 0 2px 6px rgb(120,120,120);
    border-radius: 20px;
    max-width: 100%;
`

export const ImagesWrapper = styled.div`
    padding-right: 2rem;
    min-width: 50%;
    img{
        width: 100%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
    padding-right: 3rem;

    h1{
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 1rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 0;

        div:first-child{
            display: flex;
            align-items: center;
            flex-direction: row;
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
    }

`

export const ReturnLink = styled(Link)`
    margin-bottom: 1rem;
    text-decoration: none;
    color: gray;
`