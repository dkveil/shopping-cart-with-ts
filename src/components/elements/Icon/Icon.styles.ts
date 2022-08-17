import styled from "styled-components";
import { HiShoppingCart } from 'react-icons/hi'

type ShoppingCartIconProps = {
    iconcolor?: string;
    iconpadding?: string;
    iconsize?: string;
    hovercolor?: string;
}

export type IconProps = ShoppingCartIconProps

export const ShoppingCartIcon = styled(HiShoppingCart)<IconProps>`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: ${(props) => props.iconpadding ? props.iconpadding : null};
    font-size: ${(props) => props.iconsize? props.iconsize : '30px'};
    color: ${(props) => props.iconcolor ? props.iconcolor : 'black'};
    transition: .2s color;

    &:hover{
        color: ${(props) => props.hovercolor ? props.hovercolor : null}
    }

`