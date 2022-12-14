import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
    position: sticky;
    height: 100px;
    width: 100%;
    box-shadow: 0 2px 2px rgb(200,200,200);
`

export const NavbarContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const NavbarMenu = styled.ul`
    display: flex;
    flex-direction: row;
`

export const NavbarItem = styled.li`
    font-size: 1.4rem;
    list-style: none;
    margin: 0 4px;
    color: rgb(108,108,108);
    transition: color .2s;

    &:first-child{
        margin-left: 0;
    }

    &:hover{
        color: black;
    }

    ${({theme}) => theme.mq.tablet}{
        margin: 0 10px;
    }
`

export const NavbarLink = styled(Link)`
    display: block;
    padding: 2px 2px;
    box-sizing: border-box;
    height: 100%;
    text-decoration: none;
    color: inherit;

    ${({theme}) => theme.mq.tablet}{
        padding: 6px 6px;
    }
`