import { Helmet } from 'react-helmet';

type SEO = {
    title: string;
    desc: string;
};

const SEO = ({title, desc}: SEO) => {
    return (
        <Helmet
            title={title}
            meta={[{ name: `description`, content: desc}]}
        />
    );
}

export default SEO;