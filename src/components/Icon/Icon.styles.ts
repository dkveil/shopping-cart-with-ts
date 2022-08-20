import styled from "styled-components";
import { HiShoppingCart } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

type ShoppingCartIconProps = {
    display?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
    iconcolor?: string;
    childrencolor?: string;
    iconpadding?: string;
    iconsize?: string;
    hovercolor?: string;
    height?: string;
    width?: string;
    borderradius?: string;
    border?: string;
    cursor?:string;
}

export type IconProps = ShoppingCartIconProps

export const ShoppingCartIcon = styled(HiShoppingCart)<IconProps>`
    display: ${(props) => props.display ? props.display : 'block'};
    position: ${(props) => props.position ? props.position : null};
    top: ${(props) => props.top ? props.top : null};
    bottom: ${(props) => props.bottom ? props.bottom : null};
    left: ${(props) => props.left ? props.left : null};
    right: ${(props) => props.right ? props.right : null};
    transform: ${(props) => props.transform ? props.transform : null};
    box-sizing: border-box;
    height: ${(props) => props.height ? props.height : '100%'};
    width: ${(props) => props.width ? props.width : '100%'};
    padding: ${(props) => props.iconpadding ? props.iconpadding : null};
    font-size: ${(props) => props.iconsize? props.iconsize : '30px'};
    color: ${(props) => props.iconcolor ? props.iconcolor : null};
    border-radius: ${(props) => props.borderradius ? props.borderradius : null};
    border: ${(props) => props.border ? props.border : null};
    transition: .2s color;
    cursor: ${(props) => props.cursor ? props.cursor: null};

    &:hover{
        color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }
`

export const ProductCounter = styled.div<IconProps>`
    display: ${(props) => props.display ? props.display : 'block'};
    justify-content: center;
    align-items: center;
    position: ${(props) => props.position ? props.position : null};
    top: ${(props) => props.top ? props.top : null};
    bottom: ${(props) => props.bottom ? props.bottom : null};
    left: ${(props) => props.left ? props.left : null};
    right: ${(props) => props.right ? props.right : null};
    transform: ${(props) => props.transform ? props.transform : null};
    padding: ${(props) => props.iconpadding ? props.iconpadding : null};
    font-size: ${(props) => props.iconsize? props.iconsize : '30px'};
    color: ${(props) => props.childrencolor ? props.childrencolor : null};
    height: ${(props) => props.height ? props.height : 'fit-content'};
    width: ${(props) => props.width ? props.width : 'fit-content'};
    background-color: ${(props) => props.iconcolor ? props.iconcolor : null};
    border-radius: ${(props) => props.borderradius ? props.borderradius : null};
    border: ${(props) => props.border ? props.border : null};
    cursor: ${(props) => props.cursor ? props.cursor: null};

    &:hover{
        color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }
`

export const XIcon = styled(AiOutlineClose)<IconProps>`
    display: ${(props) => props.display ? props.display : 'block'};
    justify-content: center;
    align-items: center;
    position: ${(props) => props.position ? props.position : null};
    top: ${(props) => props.top ? props.top : null};
    bottom: ${(props) => props.bottom ? props.bottom : null};
    left: ${(props) => props.left ? props.left : null};
    right: ${(props) => props.right ? props.right : null};
    transform: ${(props) => props.transform ? props.transform : null};
    padding: ${(props) => props.iconpadding ? props.iconpadding : null};
    font-size: ${(props) => props.iconsize? props.iconsize : '30px'};
    color: ${(props) => props.childrencolor ? props.childrencolor : null};
    height: ${(props) => props.height ? props.height : 'fit-content'};
    width: ${(props) => props.width ? props.width : 'fit-content'};
    background-color: ${(props) => props.iconcolor ? props.iconcolor : null};
    border-radius: ${(props) => props.borderradius ? props.borderradius : null};
    border: ${(props) => props.border ? props.border : null};
    cursor: ${(props) => props.cursor ? props.cursor: null};

    &:hover{
        color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }

`