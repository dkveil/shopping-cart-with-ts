import React from 'react'
import { useLocalStorage } from './../hooks/useLocalStorage';

type ShoppingCartContextProviderProps = {
    children: React.ReactNode;
}

type itemProps = {
    id: number;
    quantity: number;
}

type ShoppingCartContextTypes = {
    items: itemProps[];
    allProducts: number;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
    getProductAmount: (id: number) => number;
    addProductAmount: (id: number) => void;
    subbProductAmount: (id: number) => void;
    removeFromCart: (id: number) => void;
};

export const ShoppingCartContext = React.createContext({} as ShoppingCartContextTypes)

const ShoppingCartContextProvider = ({children}: ShoppingCartContextProviderProps) => {

    const [items, setItems] = useLocalStorage<itemProps[]>("shopping-cart", [])
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const allProducts = items.reduce((sum, item) => sum + item.quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getProductAmount = (id: number) => {
        return items.find((item) => item.id === id)?.quantity || 0;
    };

    const addProductAmount = (id: number) => {

        if(items.find(item => item.id === id) === undefined){
            setItems(prev => [
                ...prev,
                {id: id, quantity: 1}
            ])
        } else {
            setItems(items.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                }
            }))
        }
    }

    const subbProductAmount = (id: number) => {
        if(items.find(item => item.id === id)?.quantity === 1){
            setItems(items.filter(item => item.id !== id))
        } else {
            setItems(items.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            }))
        }
    }

    const removeFromCart = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider value={{
            items,
            allProducts,
            isOpen,
            openCart,
            closeCart,
            getProductAmount,
            addProductAmount,
            subbProductAmount,
            removeFromCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider