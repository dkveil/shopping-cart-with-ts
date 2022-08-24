import React from "react";
import {
    CartWrapper,
    CartImage,
    CartTitleLinkWrapper,
    CartTitle,
    CartContent,
    CartButtonsWrapper,
} from "./ProductCart.styles";
import { formatCurrency } from './../../utils/formatCurrency';
import Button from '../Button'
import { ShoppingCartContext } from './../../context/ShoppingCartProvider';
import { Link } from 'react-router-dom';

type ProductCartProps = {
    id: number;
    name: string;
    link: string;
    price: number;
    img: string;
}

const ProductCart = ({id, name, link, price, img}: ProductCartProps) => {

    const { getProductAmount, addProductAmount, subbProductAmount, removeFromCart } = React.useContext(ShoppingCartContext);

    const amount = getProductAmount(id)

    return (
        <CartWrapper>
            <Link to={link}>
                <CartImage src={img} alt={name} />
            </Link>
            <CartContent>
                <CartTitle>
                    <span>
                        <CartTitleLinkWrapper to={link}>
                            {name.toUpperCase()}
                        </CartTitleLinkWrapper>
                    </span>
                    <span>{formatCurrency(price, "EUR")}</span>
                </CartTitle>
                <CartButtonsWrapper>
                    {amount > 0 ? (
                        <>
                            <div>
                                <Button
                                    styletype="square"
                                    width="32px"
                                    height="32px"
                                    borderradius="4px"
                                    buttoncolor="#1d59ff"
                                    border="none"
                                    textcolor="white"
                                    fontsize="1rem"
                                    fontweight="bold"
                                    onClickHandler={() => subbProductAmount(id)}
                                >
                                    -
                                </Button>
                                <span>{amount}</span>
                                <span>in Cart</span>
                                <Button
                                    styletype="square"
                                    width="32px"
                                    height="32px"
                                    borderradius="4px"
                                    buttoncolor="#1d59ff"
                                    border="none"
                                    textcolor="white"
                                    fontsize="1rem"
                                    fontweight="bold"
                                    onClickHandler={() => addProductAmount(id)}
                                >
                                    +
                                </Button>
                            </div>
                            <Button
                                styletype="square"
                                width="85px"
                                height="25px"
                                borderradius="4px"
                                border="none"
                                buttoncolor="#e70448"
                                textcolor="white"
                                onClickHandler={() => removeFromCart(id)}
                            >
                                remove all
                            </Button>
                        </>
                    ) : (
                        <Button
                            fontsize=".95rem"
                            fontweight="bold"
                            styletype="square"
                            width="100%"
                            height="36px"
                            textcolor="white"
                            buttoncolor="#1d59ff"
                            borderradius="4px"
                            border="none"
                            onClickHandler={() => addProductAmount(id)}
                        >
                            Add to cart
                        </Button>
                    )}
                </CartButtonsWrapper>
            </CartContent>
        </CartWrapper>
    );
}

export default ProductCart