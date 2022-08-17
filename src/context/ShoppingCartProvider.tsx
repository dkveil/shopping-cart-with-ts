import React from 'react'

type ShoppingCartContextProviderProps = {
    children: React.ReactNode;
}

type itemProps = {
    id: number;
    quantity: number;
}

type ShoppingCartContext = {
    getProductAmonut: (id: number) => void
};

export const ShoppingCartContext = React.createContext({} as ShoppingCartContext)

const ShoppingCartContextProvider = ({children}: ShoppingCartContextProviderProps) => {
    const [items, setItems] = React.useState<itemProps[]>([])

    const getProductAmonut = (id: number) => {
        console.log(id)
    }

    return (
        <ShoppingCartContext.Provider value={{getProductAmonut}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider