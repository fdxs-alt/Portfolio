import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/GlobalStyle';
import { theme } from '../style/theme';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
    width: 100%;
`;
const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Jakub Sukiennik</title>
                <link rel="canonical" href="https://jakubsukiennik.netlify.app/" />
            </Helmet>
            <GlobalStyle />
            <Wrapper>
                <Header />
                {children}
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Layout;
