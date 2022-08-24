import { Wrapper } from "../containers/sectionStyles";

const Home = () => {
    return (
        <Wrapper>
            <h1 style={{ marginBottom: "1rem" }}>Hi</h1>
            <p style={{ marginBottom: "1rem" }}>
                My name is Damian and I decided to create this simple project to
                learn something about typescript. The project helped me to get
                used to typing data and generics. Typescript turned out to be
                very useful, it allowed me to keep an eye on the data. I will
                definitely use it in my next projects.
            </p>
            <p style={{ marginBottom: "1rem" }}>Tools used in the project:</p>
            <p>
                - react <br />
                - react-router
                <br />
                - rest API (soon)
                <br />
                - context API <br />
                - typescript <br />
                - styled-components
                <br />
                - global styles
                <br />
                - theme provider
                <br />
                - local storage hook
                <br />
            </p>
        </Wrapper>
    );
};

export default Home;
