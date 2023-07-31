import Image from "next/image"
import { Box } from "@mui/material"

import { images } from "@/utils/assets"

const PageHeader = ({ children, sx, image }) => {
  return (
    <Box
      className="generic-header text-center md:px-[100px] px-[20px] border-b-4 relative border-secondary"
      sx={{ py: { xs: "50px", sm: "100px" }, ...sx }}
    >
      <Image
        src={image || images.metrics}
        alt="background"
        layout="fill"
        objectFit="cover"
      />
      <Box className=" absolute top-0 left-0 h-full w-full bg-primary bg-opacity-50" />
      <h1 className="text-off-white relative font-bold md:text-[35px] text-[24px] ">
        {children}
      </h1>
    </Box>
  )
}

export default PageHeader
