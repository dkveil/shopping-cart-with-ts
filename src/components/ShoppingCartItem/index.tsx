import React from "react";
import { ShoppingCartContext } from './../../context/ShoppingCartProvider';
import * as Cart from './ShoppingCartItem';
import storeItems from '../../data/items.json'
import Icon from './../Icon/index';
import { formatCurrency } from './../../utils/formatCurrency';
import Button from './../Button/index';

type ShoppingCartItemProps = {
    id: number;
    quantity: number;
}

const ShoppingCartItem = ({id, quantity}: ShoppingCartItemProps) => {

    const { addProductAmount, subbProductAmount, removeFromCart } = React.useContext(ShoppingCartContext);

    const item = storeItems.find(item => item.id === id)

    return (
        <Cart.Wrapper>
            <Cart.Image src={item?.image} />
            <div>
                <span>
                    {item?.name}
                    <Icon
                        icontype="xicon"
                        onClickHandler={() => removeFromCart(id)}
                        height="1.4rem"
                        cursor="pointer"
                    />
                </span>
                <span>{quantity}x in cart</span>
                <span>
                    {item ? formatCurrency(item.price, "EUR") : null} for one
                </span>
                <div>
                    <Button
                        styletype="square"
                        width="24px"
                        height="24px"
                        textcolor="white"
                        borderradius="4px"
                        buttoncolor="#1d59ff"
                        border="none"
                        onClickHandler={() => subbProductAmount(id)}
                    >
                        -
                    </Button>
                    <Button
                        styletype="square"
                        width="24px"
                        height="24px"
                        textcolor="white"
                        borderradius="4px"
                        buttoncolor="#1d59ff"
                        border="none"
                        onClickHandler={() => addProductAmount(id)}
                    >
                        +
                    </Button>
                </div>
            </div>
        </Cart.Wrapper>
    );
}

export default ShoppingCartItem;