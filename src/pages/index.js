import { Box, Stack } from "@mui/material"

import BannerArea from "@/components/home/BannerArea"
import About from "@/components/home/HowWeHelp"
import News from "@/components/home/InTheNews"
import KeyPoints from "@/components/home/KeyPoints"
import ReferralDoc from "@/components/home/ReferralDoc"
import Team from "@/components/home/Team"
import Testimonial from "@/components/home/Testimonial"
import AppContext from "@/store/context"
import {
  fetchAllStaff,
  fetchAllTestimonials,
  fetchIpAddress,
} from "@/services/actions"
import { useContext, useEffect } from "react"
import TagManager from "react-gtm-module"

const LandingPage = ({ staff, testimonials, ipData }) => {
  const ipCtx = useContext(AppContext)

  useEffect(() => {
    if (ipData) {
      ipCtx.setIp(ipData?.ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ipData?.ip || ipCtx?.ipAddress || "",
        userProject: "Dr.Lullaby-marketing",
        page: "Home",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className="container-box">
      <BannerArea />
      <KeyPoints />
      <Stack className="mt-[50px] lg:gap-[100px] md:gap-[70px] gap-[50px]">
        <Box>
          <Testimonial data={testimonials?.data} />
          <News />
        </Box>
        <Team data={staff?.data} />
        <Box>
          <About />
          <ReferralDoc />
        </Box>
      </Stack>
    </Box>
  )
}

export async function getStaticProps() {
  const ipData = await fetchIpAddress()
  const testimonials = await fetchAllTestimonials()
  const staff = await fetchAllStaff()

  return {
    props: {
      staff: staff || null,
      testimonials: testimonials || null,
      ipData: ipData || null,
    },
    revalidate: 3600,
  }
}

export default LandingPage
