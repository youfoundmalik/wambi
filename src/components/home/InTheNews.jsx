import { useRouter } from "next/router"

import { Box, Button } from "@mui/material"

import Section from "../shared/Section"
import { inTheNews } from "@/utils/assets"
import Image from "next/image"

const News = () => {
  const router = useRouter()

  return (
    <Section className="news-logo-container bg-[#F7F9FCCC] md:py-[60px] py-[30px]">
      <Box className="flex flex-wrap lg:flex-row items-center justify-center lg:gap-x-[10px]  gap-[20px] flex-col">
        <h3 className="text-primary flex items-center md:font-[500] md:text-[20px] font-[600]">
          DrLullaby in the News<p className="lg:block hidden">:</p>
        </h3>
        <Box className="flex md:w-full lg:w-[unset] flex-grow items-center md:justify-between md:gap-x-0 justify-center gap-[25px] flex-wrap">
          {inTheNews.map((logo, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "85px", sm: "100px", md: "150px" },
                height: "auto",
              }}
            >
              <Image src={logo} alt="news channel" width={300} height={300} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="w-full grid justify-center mt-[30px]">
        <Button
          sx={{ px: "40px", py: "10px", height: "unset", borderRadius: "50px" }}
          variant="outlined"
          color="secondary"
          disableElevation
          onClick={() => router.push("/in-the-news")}
        >
          And More
        </Button>
      </Box>
    </Section>
  )
}

export default News
