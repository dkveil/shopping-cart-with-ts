import { CartWrapper, CartImage, CartTitle } from "./ProductCart.styles"
import { formatCurrency } from './../../utils/formatCurrency';

type ProductCartProps = {
    id: number;
    name: string;
    price: number;
    img: string;
}

const ProductCart = ({id, name, price, img}: ProductCartProps) => {
    return (
        <CartWrapper>
            <CartImage src={img} alt={name}/>
            <div>
                <CartTitle>
                    <span>{name.toUpperCase()}</span>
                    <span>{formatCurrency(price, 'EUR')}</span>
                </CartTitle>
            </div>
        </CartWrapper>
    )
}

export default ProductCart