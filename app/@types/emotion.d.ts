import "@emotion/react"

declare module "@emotion/react" {
  interface Theme {
    colors: {
      primary: {
        brightRed: string
        darkBlue: string
      },
      neutral: {
        darkGrayishBlue: string
        veryDarkBlue: string
        veryPaleRed: string
        veryLightGray: string
      }
    },
    typography: {
      bodyCopy: number
    }
  }
}
