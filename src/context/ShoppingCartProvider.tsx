import React from 'react'

type ShoppingCartContextProviderProps = {
    children: React.ReactNode;
}

type itemProps = {
    id: number;
    quantity: number;
}

type ShoppingCartContextTypes = {
    getProductAmonut: (id: number) => number;
    addProductAmount: (id: number) => void;
    subbProductAmount: (id: number) => void;
    removeFromCart: (id: number) => void;
};

export const ShoppingCartContext = React.createContext({} as ShoppingCartContextTypes)

const ShoppingCartContextProvider = ({children}: ShoppingCartContextProviderProps) => {
    const [items, setItems] = React.useState<itemProps[]>([])

    const getProductAmonut = (id: number) => {
        return items.find(item => item.id === id)?.quantity || 0
    }

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
                    return {...item, quantity: item.quantity}
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
            getProductAmonut,
            addProductAmount,
            subbProductAmount,
            removeFromCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider