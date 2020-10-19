import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import { theme } from '../style/theme'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
    width: 100%;
`
const Layout: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Wrapper>
                <Header />
                {children}
                <Footer />
            </Wrapper>
        </ThemeProvider>
    )
}

export default Layout
