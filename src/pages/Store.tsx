import React from "react";
import { Wrapper, ContentWrapper } from "../containers/sectionStyles";
import ProductCart from "../components/ProductCart";

type storeItemProps = {
    id: number,
    name: string;
    price: number;
    image: string;
}

const Store = () => {

    const [storeItems, setStoreItems] = React.useState<storeItemProps[]>([])

    React.useEffect(() => {
        fetch("./data/items.json", {
            method: "GET",
        })
            .then((res) => {
                if (res.ok) {
                    return res;
                }
            })
            .then((res) => res?.json())
            .then((data) => {
                setStoreItems(data);
            })
            .catch((error) => console.log(error));

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
