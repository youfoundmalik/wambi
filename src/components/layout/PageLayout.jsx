import { Box } from "@mui/material"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const PageLayout = ({ children, sxHeader, sxFooter }) => {
  return (
    <Box className="min-h-screen flex flex-col">
      <Header sx={sxHeader} />
      <Box id="content" component="main" className="flex-grow">
        {children}
      </Box>
      <Footer sx={sxFooter} />
    </Box>
  )
}

export default PageLayout
