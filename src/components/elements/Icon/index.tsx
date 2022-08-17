import React from 'react';
import { ShoppingCartIcon, ProductCounter, IconProps} from './Icon.styles'

interface IIconProps extends IconProps{
    icontype: string;
    children?: React.ReactNode
}

export default function Icon ({
    icontype,
    display,
    position,
    top,
    bottom,
    left,
    right,
    transform,
    width,
    height,
    childrencolor,
    iconcolor,
    iconsize,
    iconpadding,
    hovercolor,
    borderradius,
    border,
    children
}: IIconProps) {
    switch(icontype){
        case 'shoppingcart':
            return (
                <ShoppingCartIcon
                    position={position}
                    display={display}
                    top={top}
                    bottom={bottom}
                    left={left}
                    right={right}
                    transform={transform}
                    width={width}
                    height={height}
                    iconcolor={iconcolor}
                    iconsize={iconsize}
                    iconpadding={iconpadding}
                    hovercolor={hovercolor}
                />
            );
        case 'productcounter':
            return (
                <ProductCounter
                    position={position}
                    display={display}
                    top={top}
                    bottom={bottom}
                    left={left}
                    right={right}
                    transform={transform}
                    width={width}
                    height={height}
                    iconcolor={iconcolor}
                    iconsize={iconsize}
                    iconpadding={iconpadding}
                    hovercolor={hovercolor}
                    childrencolor={childrencolor}
                    borderradius={borderradius}
                    border={border}
                >
                    {children}
                </ProductCounter>
            );
        default:
            return null
    }
}
