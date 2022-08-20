import React from "react";
import { Routes, Route } from "react-router";
import Container from "./containers/container";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import ShoppingCartContextProvider from "./context/ShoppingCartProvider";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ShoppingCartContextProvider>
                <Navbar />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/store" element={<Store />} />
                    </Routes>
                </Container>
                <ShoppingCart/>
            </ShoppingCartContextProvider>
        </ThemeProvider>
    );
};

export default App;
