import { Wrapper, ContentWrapper } from '../../containers/sectionStyles';
import { useParams } from 'react-router';
import storeItems from '../../data/items.json'
import { isConstructorDeclaration } from 'typescript';

const ProductPage = () => {

    const { name } = useParams();

    const product = storeItems.find(item => item.name === name)

    console.log(product)

    return (
        <Wrapper>
            <ContentWrapper>
                {name}
            </ContentWrapper>
        </Wrapper>
    );
};

export default ProductPage;
