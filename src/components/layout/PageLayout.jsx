import { Box } from "@mui/material"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Head from "next/head"

const PageLayout = ({ children, sxHeader, sxFooter }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>DrLullaby Sleep Treatment Center (Insomnia)</title>
        <meta
          name="description"
          content="Affordable online platform treating sleep disorders. Connect with experts for insomnia, sleep remedies, therapy, and medication."
          data-rh="true"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link href="https://fonts.cdnfonts.com/css/gordita" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link key="canonical" rel="canonical" href="/" />

        <meta
          key="og:image"
          property="og:image"
          content="https://drlullaby-marketing.s3.us-east-2.amazonaws.com/share_3e88e26f77.png"
        />
        <meta
          key="og:title"
          property="og:title"
          content="DrLullaby Sleep Treatment Center"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta property="og:url" content="https://www.drlullaby.com/" />
        <meta
          key="og:description"
          property="og:description"
          content="Affordable online platform treating sleep disorders. Connect with experts for insomnia, sleep remedies, therapy, and medication."
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta
          name="google-site-verification"
          content="-ad_n1bWchPvP2uvwPga9nNHsqADI_rWX0G7tJTHmdk"
        />
      </Head>
      <Box className="flex flex-col min-h-screen application">
        <Header sx={sxHeader} />
        <Box id="content" component="main" className="flex-grow">
          {children}
        </Box>
        <Footer sx={sxFooter} />
      </Box>
    </>
  )
}

export default PageLayout
