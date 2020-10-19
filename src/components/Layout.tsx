import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../style/GlobalStyle"
import { theme } from "../style/theme"

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default Layout
