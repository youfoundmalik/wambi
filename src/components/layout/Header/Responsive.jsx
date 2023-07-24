import Link from "next/link"
import { useState } from "react"

import { Box, Button } from "@mui/material"

import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp"

import CallToAction from "../../shared/CallToAction"
import NavLinks from "../NavLinks/NavLinks"

const Responsive = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  return (
    <nav
      className={`responsive-nav responsive-mode justify-between items-center ${
        open ? "open" : ""
      }`}
    >
      <button className="navbar-burger" onClick={handleToggle}>
        <div htmlFor="toggler" className="burger">
          <span className="bun bun--top">
            <span className="bun__crust bun__crust--top"></span>
          </span>
          <span className="bun bun--bottom">
            <span className="bun__crust bun__crust--bottom"></span>
          </span>
        </div>
      </button>
      <div className="menu">
        <Box className="w-[85%] mx-[auto]">
          <NavLinks className="grid">
            <div className="news w-full">
              <p className="cursor-pointer">
                Learn about sleep <ArrowDropDownSharpIcon fontSize="large" />
              </p>
              <div className="sub-menu flex flex-col text-white">
                <Link href="/in-the-news" style={{ animationDelay: "0.1s" }}>
                  Our Founder in the News
                </Link>
                <Link href="/blog" style={{ animationDelay: "0.1s" }}>
                  Tips from Our Founder
                </Link>
              </div>
            </div>
          </NavLinks>
        </Box>
        <Box className="action-buttons w-[85%] mx-[auto] flex flex-col mt-[30px] items-center gap-[25px]">
          <CallToAction sx={{ height: "55px", width: "100%" }} gradient />
          <a href="https://app.drlullaby.com/#/login" target="_blank">
            <Button
              disableElevation
              disableRipple
              variant="outlined"
              color="secondary"
              sx={{ fontSize: "14px", px: "35px" }}
              className="h-[50px] w-full"
            >
              Login
            </Button>
          </a>
        </Box>
      </div>
    </nav>
  )
}

export default Responsive
