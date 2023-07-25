import "@/styles/globals.css"
import "@/styles/main.css"
import "@/styles/index.css"
import "@/styles/slick.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { useEffect, useState } from "react"
import TagManager from "react-gtm-module"
import { ThemeProvider } from "@mui/material"

import theme from "@/utils/Theme"
import { AppContextProvider } from "@/store/context"
import PageLayout from "@/components/layout/PageLayout"

const tagManagerArgs = {
  gtmId: "GTM-5NRZCF7",
  dataLayerName: "PageDataLayer",
}
// TagManager.initialize(tagManagerArgs)

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <PageLayout
          sxFooter={{ mt: "0px", pt: { xs: "70px", sm: "100px", md: "120px" } }}
        >
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </AppContextProvider>
  )
}
