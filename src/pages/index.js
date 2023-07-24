import Image from "next/image"
import { Box, Stack } from "@mui/material"

import PageLayout from "@/components/layout/PageLayout"
import BannerArea from "@/components/home/BannerArea"
import About from "@/components/home/HowWeHelp"
import News from "@/components/home/InTheNews"
import KeyPoints from "@/components/home/KeyPoints"
import ReferralDoc from "@/components/home/ReferralDoc"
import Team from "@/components/home/Team"
import Testimonial from "@/components/home/Testimonial"

const LandingPage = () => {
  // const tagManagerArgs = {
  //   dataLayer: {
  //     userId: useContext(UserContext),
  //     userProject: "Dr.Lullaby-marketing",
  //     page: "Home",
  //   },
  //   dataLayerName: "PageDataLayer",
  // };

  // TagManager.dataLayer(tagManagerArgs);

  return (
    <Box className="container-box">
      {/* <Helmet>
        <title>DrLullaby Sleep Treatment Center (Insomnia)</title>
        <link rel="canonical" href="/" />
        <meta
          property="og:image"
          content="https://drlullaby-marketing.s3.us-east-2.amazonaws.com/share_3e88e26f77.png"
        />
        <meta
          name="description"
          content="Affordable online platform treating sleep disorders. Connect with experts for insomnia, sleep remedies, therapy, and medication."
        />
      </Helmet> */}
      <PageLayout
        sxFooter={{ mt: "0px", pt: { xs: "70px", sm: "100px", md: "120px" } }}
      >
        <BannerArea />
        <KeyPoints />
        <Stack className="mt-[50px] lg:gap-[100px] md:gap-[70px] gap-[50px]">
          <Box>
            <Testimonial />
            <News />
          </Box>
          <Team />
          <Box>
            <About />
            <ReferralDoc />
          </Box>
        </Stack>
      </PageLayout>
    </Box>
  )
}

export default LandingPage
