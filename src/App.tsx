import { Routes, Route } from "react-router";
import Container from "./components/container";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from './styles/global'

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Container>
            ss
            <Routes></Routes>
        </Container>
      </ThemeProvider>
  );
}

export default App;
