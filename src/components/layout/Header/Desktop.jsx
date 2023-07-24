import Link from "next/link"
import { Box, Button } from "@mui/material"

import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp"

import CallToAction from "../../shared/CallToAction"
import NavLinks from "../NavLinks/NavLinks"

const Desktop = () => {
  return (
    <nav className="desktop-nav desktop-mode items-center justify-end gap-[50px]">
      <NavLinks className="header-nav flex gap-[40px] items-center h-full">
        <Box className="h-full dropdown">
          <p className="h-full flex items-center text-sm cursor-pointer">
            Learn about sleep{" "}
            <span>
              <ArrowDropDownSharpIcon />
            </span>
          </p>
          <div className="dropdown-menu">
            <Link href="/in-the-news" style={{ animationDelay: "0.1s" }}>
              Our Founder in the News
            </Link>
            <Link href="/blog" style={{ animationDelay: "0.1s" }}>
              Tips from Our Founder
            </Link>
          </div>
        </Box>
      </NavLinks>
      <Box className="buttons flex items-center gap-[15px]">
        <CallToAction gradient />
        <a href="https://app.drlullaby.com/#/login" target="_blank">
          <Button
            disableElevation
            disableRipple
            variant="outlined"
            color="secondary"
            sx={{ fontSize: "14px", px: "35px" }}
            className="h-[44px]"
          >
            Login
          </Button>
        </a>
      </Box>
    </nav>
  )
}

export default Desktop
