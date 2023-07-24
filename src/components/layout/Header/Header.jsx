import { useRouter } from "next/router"
import { Box, Stack } from "@mui/material"

import Desktop from "./Desktop"
import Responsive from "./Responsive"

const Header = ({ sx }) => {
  const router = useRouter()
  return (
    <Stack
      id="header"
      sx={sx}
      component="header"
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      className="header drop-shadow bg-white md:h-[80px] lg:px-[100px] md:px-[30px] h-[65px] px-[15px] sticky top-0 z-[99]"
    >
      <Box
        className="meta flex flex-col justify-center cursor-pointer w-max"
        onClick={() => router.push("/")}
      >
        <h2 className="logo text-primary font-[900] md:text-[28px] text-[22px]">
          DrLullaby
        </h2>
        <p className="tagline text-light italic md:text-[10px] text-[9px]">
          Sleep Better. Live Better
        </p>
      </Box>
      <Desktop />
      <Responsive />
    </Stack>
  )
}

export default Header
