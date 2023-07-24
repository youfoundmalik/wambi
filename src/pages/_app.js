import "@/styles/globals.css"
import "@/styles/main.css"
import "@/styles/index.css"
import "@/styles/slick.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ThemeProvider } from "@mui/material"
import theme from "@/utils/Theme"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
