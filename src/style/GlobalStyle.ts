import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   
   @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;

    }
    html, body { 
        width: 100%;
        height: 100%;
        
    }

    
    
`
export default GlobalStyle
