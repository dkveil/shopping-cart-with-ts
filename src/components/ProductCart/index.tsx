import { CartWrapper, CartImage, CartTitle, CartContent, CartButtonsWrapper } from "./ProductCart.styles"
import { formatCurrency } from './../../utils/formatCurrency';
import Button from '../Button'

type ProductCartProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}

const ProductCart = ({id, name, price, img}: ProductCartProps) => {

    const amount = 0;

    return (
        <CartWrapper>
            <CartImage src={img} alt={name} />
            <CartContent>
                <CartTitle>
                    <span>{name.toUpperCase()}</span>
                    <span>{formatCurrency(price, "EUR")}</span>
                </CartTitle>
                <CartButtonsWrapper>
                    {amount > 0 ? (
                        <CartButtonsWrapper>true</CartButtonsWrapper>
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
                                onClickHandler={() => console.log("button action")}
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