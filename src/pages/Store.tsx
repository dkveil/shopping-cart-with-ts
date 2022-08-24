import storeitems from "../data/items.json";
import { Wrapper, ContentWrapper } from "../containers/sectionStyles";
import ProductCart from "../components/ProductCart";

const Store = () => {
    return (
        <Wrapper>
            <h1>Store</h1>
            <ContentWrapper
            justifycontent="space-between"
            >
                {storeitems.map(item => (
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
