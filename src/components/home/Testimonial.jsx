import { useEffect, useState } from "react"
import { Box, Stack } from "@mui/material"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

import Section from "../shared/Section"
import SlickSlider from "../shared/slickSlider/SlickSlider"
import { fetchAllTestimonials } from "../../services/actions"
import Image from "next/image"
import { images } from "@/utils/assets"

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const getAllTestimonials = async () => {
      try {
        const response = await fetchAllTestimonials()
        if (response) {
          setTestimonials(response.data)
        }
      } finally {
      }
    }
    getAllTestimonials()
  }, [])

  return (
    <Section className="testimonial-container bg-[#f7f9fc] md:pt-[100px] md:pb-[70px] py-[50px] relative text-center">
      <Image
        src={images.abstract}
        alt="background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
      />
      <Box className="overlay z-[1] absolute" />
      <Box className="relative z-[2]">
        <h3 className="sub-heading text-primary opacity-95">
          What our colleagues are saying about{" "}
          <br className="hidden md:block" />
          Cognitive Behavioral Treatment for Insomnia (CBT-I)
        </h3>
        <Box className="testimonial-slider mx-auto md:py-[50px] md:mt-[10px] lg:w-[85%] mt-[40px]">
          {testimonials.length > 0 && (
            <SlickSlider slidesToShow={1} slidesToScroll={1} showArrows={true}>
              {testimonials?.map((quote, i) => (
                <Card key={i} quote={quote} />
              ))}
            </SlickSlider>
          )}
        </Box>
      </Box>
    </Section>
  )
}

export default Testimonial

const Card = ({ quote }) => {
  return (
    <Box className="grid w-full">
      <Box className="min-w-full flex h-fit flex-col items-center">
        <span className="">
          <FormatQuoteIcon
            color="secondary"
            fontSize="large"
            sx={{ transform: "scaleX(-1)" }}
          />
        </span>
        <ReactMarkdown
          id="testimonial-review"
          className="markdown text-[14px] text-black text-center opacity-90"
        >
          {quote?.attributes?.review}
        </ReactMarkdown>
        <span className="">
          <FormatQuoteIcon color="secondary" fontSize="large" />
        </span>
        <Stack className="mt-[10px]" alignItems="center">
          <h3 className="text-black opacity-80 font-bold">
            {quote?.attributes?.name}{" "}
            <span className="text-[12px] font-normal opacity-50">
              {quote?.attributes?.degree}
            </span>
          </h3>
          <p className="text-secondary text-[12px]">
            {quote?.attributes?.position}
          </p>
        </Stack>
      </Box>
    </Box>
  )
}
