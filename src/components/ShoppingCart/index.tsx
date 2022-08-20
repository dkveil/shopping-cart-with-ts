
import React from 'react';
import {
    ShoppingCartWrapper,
    ShoppingCartHeader,
    ShoppingCartContent,
} from "./ShoppingCart.styles";
import { ShoppingCartContext } from '../../context/ShoppingCartProvider';
import { XIcon } from '../Icon/Icon.styles';
import ShoppingCartItem from '../ShoppingCartItem';

const ShoppingCart = () => {

    const { items, allProducts, isOpen, closeCart } = React.useContext(ShoppingCartContext);

    console.log(items)

    return (
        <ShoppingCartWrapper isOpen={isOpen}>
            <ShoppingCartHeader>
                <span>
                    Your products{allProducts > 0 ? ` (${allProducts})` : null}:
                </span>
                <XIcon
                    onClick={closeCart}
                    height='2.65rem'
                    cursor='pointer'
                />
            </ShoppingCartHeader>
            <ShoppingCartContent>
                {items.map(item => (
                    <ShoppingCartItem
                    id={item.id}
                    quantity={item.quantity}
                    />
                ))}
            </ShoppingCartContent>
        </ShoppingCartWrapper>
    )
}

export default ShoppingCart;