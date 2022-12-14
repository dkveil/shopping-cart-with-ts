import React from 'react'
import Container from "../../containers/container";
import {
    NavbarWrapper,
    NavbarContentWrapper,
    NavbarMenu,
    NavbarItem,
    NavbarLink,
} from "./Navbar.styles";
import Button from "../Button";
import Icon from "../Icon";
import { ShoppingCartContext } from "../../context/ShoppingCartProvider";

type menuItem = {
    name: string;
    path: string;
};

const menuItems: menuItem[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Store",
        path: "/store",
    },
];

const Navbar = () => {

    const { allProducts, openCart } = React.useContext(ShoppingCartContext)

    return (
        <NavbarWrapper>
            <Container>
                <NavbarContentWrapper>
                    <NavbarMenu>
                        {menuItems.map((item) => (
                            <NavbarItem key={item.name}>
                                <NavbarLink to={item.path}>
                                    {item.name}
                                </NavbarLink>
                            </NavbarItem>
                        ))}
                    </NavbarMenu>
                    <Button
                        styletype="triangle"
                        border="1px solid rgb(200,200,200)"
                        buttoncolor="white"
                        onClickHandler={openCart}
                        hovercolor="blue"
                    >
                        <Icon
                            icontype="shoppingcart"
                            iconcolor="blue"
                            iconpadding="8px"
                            hovercolor="white"
                        />
                        <Icon
                            display="flex"
                            position="absolute"
                            iconsize=".7rem"
                            iconcolor="#f10045"
                            childrencolor="white"
                            icontype="productcounter"
                            height="1.4rem"
                            width="1.4rem"
                            bottom="-20%"
                            right="-10%"
                            transform="translate(25%,-25%)"
                            borderradius="100%"
                        >
                            {allProducts}
                        </Icon>
                    </Button>
                </NavbarContentWrapper>
            </Container>
        </NavbarWrapper>
    );
};

export default Navbar;
