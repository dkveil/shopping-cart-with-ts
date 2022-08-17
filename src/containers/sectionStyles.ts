import styled from "styled-components"

type WrapperProps = {
    background?: string
}

export const Wrapper = styled.section<WrapperProps>`
    padding: 2rem 0;
    background: ${(props) => props.background ? props.background : null};

    h1{
        font-size: 2.4rem;
    }
`

type ContentWrapperProps = {
    justifycontent?: string;
    padding?: string;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
    display: flex;
    justify-content: ${(props) => props.justifycontent ? props.justifycontent : null};
    flex-direction: column;
    flex-wrap: wrap;
    padding: ${(props) => props.padding? props.padding : "2rem 0"};
    ${({theme}) => theme.mq.tablet}{
        flex-direction: row;
    }
`