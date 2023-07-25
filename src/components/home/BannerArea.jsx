import { Box } from "@mui/material"
import { useEffect, useState } from "react"

import Questionnaire from "./Questionnaire"
import { bannerImages } from "@/utils/assets"
import Image from "next/image"

const BannerArea = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (active === 2) {
        setActive(0)
      } else {
        setActive(active + 1)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [active])

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: {
          xs: "calc(80vh - 60px) !important",
          sm: "calc(65vh - 70px) !important",
          md: "calc(93vh - 70px) !important",
        },
        paddingY: { xs: "75px", md: "100px" },
      }}
      className="banner-container flex flex-col justify-center z-[1]"
    >
      <Box className="overlay bg-primary md:opacity-20 opacity-[15%]" />
      <Box className="overlay2" />
      <Box className="banner-carousel">
        <Box className="carousel-inner">
          {bannerImages.map((bg, i) => (
            <Image
              src={bg}
              key={i}
              alt="banner"
              layout="fill"
              objectFit="cover"
              quality={100}
              className={`carousel-item carousel-item-${i} h-[100px] ${
                active === i ? "carousel-item__next" : ""
              }`}
            />
          ))}
        </Box>
      </Box>
      <Box className="relative z-[4] lg:ml-[100px] md:ml-[50px] lg:mr-[46%] md:mr-[15%] mx-[15px]">
        <Questionnaire />
        <h1 className="font-[500] mt-7 text-[#E3D5AD] mb-[10px] md:text-[20px] text-[16px]">
          We treat Insomnia, and more.
        </h1>
        <h2 className="font-[400] text-[#FDF7E4E8] opacity-85  text-[14px]">
          With Cognitive Behavioral Treatment for Insomnia (CBT-I), and other
          behavior-change protocols
        </h2>
      </Box>
    </Box>
  )
}

export default BannerArea
