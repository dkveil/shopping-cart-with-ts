import {ShoppingCartIcon} from './Icon.styles'
import { IconProps } from './Icon.styles'

interface IIconProps extends IconProps{
    icontype: string;
}

export default function Icon ({icontype, iconcolor, iconsize, iconpadding, hovercolor}: IIconProps) {
    switch(icontype){
        case 'shoppingcart':
            return (
                <ShoppingCartIcon
                    iconcolor={iconcolor}
                    iconsize={iconsize}
                    iconpadding={iconpadding}
                    hovercolor={hovercolor}
                />
            );
        default:
            return null
    }
}
