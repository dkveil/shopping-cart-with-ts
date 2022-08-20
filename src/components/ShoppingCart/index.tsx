
import React from 'react';
import { ShoppingCartWrapper, ShoppingCartHeader } from './ShoppingCart.styles'
import { ShoppingCartContext } from '../../context/ShoppingCartProvider';
import { XIcon } from '../Icon/Icon.styles';

const ShoppingCart = () => {

    const { isOpen, closeCart } = React.useContext(ShoppingCartContext);

    console.log(isOpen)

    return (
        <ShoppingCartWrapper isOpen={isOpen}>
            <ShoppingCartHeader>
                <span>
                    Your products:
                </span>
                <XIcon
                onClick={closeCart}
                height='2.65rem'
                cursor='pointer'
                />
            </ShoppingCartHeader>
        </ShoppingCartWrapper>
    )
}

export default ShoppingCart;