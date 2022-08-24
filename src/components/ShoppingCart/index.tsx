
import React from 'react';
import {
    ShoppingCartWrapper,
    ShoppingCartHeader,
    ShoppingCartContent,
    ShoppingCartPriceWrapper,
} from "./ShoppingCart.styles";
import { ShoppingCartContext } from '../../context/ShoppingCartProvider';
import { XIcon } from '../Icon/Icon.styles';
import ShoppingCartItem from '../ShoppingCartItem';
import { formatCurrency } from './../../utils/formatCurrency';
import storeItems from '../../data/items.json'


const ShoppingCart = () => {

    const { items, allProducts, isOpen, closeCart } = React.useContext(ShoppingCartContext);

    const totalPrice = formatCurrency(items.reduce((total, item) => {
        const currentItem = storeItems.find(i => i.id === item.id)

        return total + (currentItem?.price || 0) * item.quantity
    }, 0), 'EUR')

    return (
        <ShoppingCartWrapper isOpen={isOpen}>
            <ShoppingCartHeader>
                <span>
                    Your products{allProducts > 0 ? ` (${allProducts})` : null}:
                </span>
                <XIcon onClick={closeCart} height="2.65rem" cursor="pointer" />
            </ShoppingCartHeader>
            <ShoppingCartContent>
                {items.map((item) => (
                    <ShoppingCartItem key={item.id} id={item.id} quantity={item.quantity} />
                ))}
            </ShoppingCartContent>
            <ShoppingCartPriceWrapper>
                {items.length !== 0
                    ? `Total price: ${totalPrice}`
                    : 'cart is empty'
                }
            </ShoppingCartPriceWrapper>
        </ShoppingCartWrapper>
    );
}

export default ShoppingCart;