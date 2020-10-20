import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            seconary: string
            fontColor: string
            darkGrey: string
            darkFont: string
        }
    }
}
