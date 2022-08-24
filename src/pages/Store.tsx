import React from "react";
import { Wrapper, ContentWrapper } from "../containers/sectionStyles";
import ProductCart from "../components/ProductCart";
import { getData } from './../utils/getData.utils';

export type storeItemProps = {
    id: number,
    name: string;
    price: number;
    image: string;
}

const Store = () => {

    const [storeItems, setStoreItems] = React.useState<storeItemProps[]>([])

    React.useEffect(() => {
        const fetchItems = async () => {
            const items = await getData<storeItemProps[]>('./data/items.json')

            setStoreItems(items)
        }

        fetchItems()
    }, [])

    return (
        <Wrapper>
            <h1>Store</h1>
            <ContentWrapper
            justifycontent="space-between"
            >
                {storeItems && storeItems.map(item => (
                    <ProductCart
                        key={item.id}
                        id={item.id}
                        link={`/store/${item.name}`}
                        name={item.name}
                        price={item.price}
                        img={item.image}
                    />
                ))}
            </ContentWrapper>
        </Wrapper>
    );
};

export default Store;
