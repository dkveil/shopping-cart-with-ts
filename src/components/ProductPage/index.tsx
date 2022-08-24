import React from 'react';
import { Wrapper, ContentWrapper } from '../../containers/sectionStyles';
import { useParams } from 'react-router';
import storeItems from '../../data/items.json'
import * as Product from './ProductPage.styles';
import { ShoppingCartContext } from '../../context/ShoppingCartProvider';
import Button from '../Button';

const ProductPage = () => {

    const { name } = useParams();
    const { getProductAmount, subbProductAmount, addProductAmount, removeFromCart } = React.useContext(ShoppingCartContext);

    const product = storeItems.find(item => item.name === name)
    const amount = product ? getProductAmount(product.id) : null

    console.log(product)

    return (
        <Wrapper>
            <ContentWrapper>
                {product ? (
                    <>
                        <Product.ReturnLink to="/store">
                            Back to store page
                        </Product.ReturnLink>
                        <Product.Wrapper>
                            <Product.ImagesWrapper>
                                <img src={product.image} alt={product.name} />
                            </Product.ImagesWrapper>
                            <Product.Content>
                                <h1>{product.name.toUpperCase()}</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Possimus quaerat adipisci
                                    aperiam tempore libero voluptatum soluta
                                    numquam magnam rem, fugiat velit illo eaque,
                                    aut laudantium natus ad. Quidem, quisquam
                                    veritatis.
                                </p>
                                <div>


                                    {(amount !== null && amount > 0) ? (
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
                                                    onClickHandler={() =>
                                                        subbProductAmount(product.id)
                                                    }
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
                                                    onClickHandler={() =>
                                                        addProductAmount(product.id)
                                                    }
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
                                                onClickHandler={() =>
                                                    removeFromCart(product.id)
                                                }
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
                                            onClickHandler={() =>
                                                addProductAmount(product.id)
                                            }
                                        >
                                            Add to cart
                                        </Button>
                                    )}
                                </div>
                            </Product.Content>
                        </Product.Wrapper>
                    </>
                ) : (
                    <>product not found</>
                )}
            </ContentWrapper>
        </Wrapper>
    );
};

export default ProductPage;
