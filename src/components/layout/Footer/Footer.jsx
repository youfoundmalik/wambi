import Link from "next/link"
import { useRouter } from "next/router"
import { Box, IconButton } from "@mui/material"

import Section from "../../shared/Section"
import NavLinks from "../NavLinks/NavLinks"
import LinkedIn from "@/components/shared/icons/linkedin"

const Footer = ({ sx }) => {
  const router = useRouter()
  return (
    <Section
      component="footer"
      sx={{
        mt: { xs: "50px", sm: "100px" },
        pt: { xs: "50px", sm: "80px" },
        ...sx,
      }}
      className="footer-container bg-[#F7F9FC]"
      id="footer"
    >
      <Box className="footer-inner grid md:grid-cols-3 lg:gap-[70px] md:gap-[30px] md:pb-[70px] pb-[50px] gap-[50px]">
        <Box className="footer-bio">
          <Box
            className="meta flex flex-col justify-center cursor-pointer w-max"
            onClick={() => router.push("/")}
          >
            <h2 className="logo text-primary md:text-[30px] text-[28px] font-[900]">
              DrLullaby
            </h2>
            <p className="tagline italic md:text-[12px] text-[10px] text-light">
              Sleep Better. Live Better
            </p>
          </Box>
          <p className="text-black opacity-80 text-[13px] mt-[15px] leading-[25px]">
            {`DrLullaby offers telehealth diagnosis and treatment in states where
            we have a licensed provider. DrLullaby's digital health component
            (i.e., webapp only/self-service) does not include diagnosis or
            treatment. In states where we do not yet have a licensed
            psychologist, there is no diagnosis or treatment offering.`}
          </p>
        </Box>
        <Box className="grid lg:grid-cols-2 md:gap-[30px] gap-[50px]">
          <Box className="footer-links text-black opacity-90 text-sm flex flex-col gap-[15px]">
            <h3 className="font-medium text-[15px] text-primary">
              Quick Links
            </h3>
            <NavLinks className="footer-links flex flex-col gap-[15px]" />
          </Box>
          <Box className="footer-links text-black opacity-90 text-sm flex flex-col gap-[15px]">
            <h3 className="font-medium text-[15px] text-primary">Policies</h3>
            <Link href="/cost-policy">Cost Policy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </Box>
        </Box>

        <Box className="footer-contact text-black opacity-90 text-sm flex flex-col gap-[15px]">
          <p>
            Scheduling, and General Questions:{" "}
            <a className="text-[#167feb] font-medium" href="tel:844-475-3379">
              844-4SLEEPY
            </a>
          </p>
          <p>
            Insurance Billing:{" "}
            <a className="text-[#167feb] font-medium" href="tel:702-707-2625">
              702-707-2625
            </a>
          </p>
          <p>
            Tech Problem?{" "}
            <a
              className="text-[#167feb] font-medium"
              target="_blank"
              href="https://docs.google.com/forms/d/1jUpBSlYo5Q47u74CMwx0CTolsvukwdz-b_1QmEJGfVs/edit?usp=drive_web"
            >
              Tell us About it
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              className="text-[#167feb] font-medium"
              href="mailto:support@drlullaby.com"
            >
              support@drlullaby.com
            </a>
          </p>
          <h4 className="font-medium text-[15px] text-primary mt-[10px]">
            Follow us on LinkedIn
          </h4>
          <IconButton
            size="large"
            className="drop-shadow w-fit"
            sx={{ bgcolor: "#fff" }}
          >
            <a
              href="https://www.linkedin.com/company/drlullaby/"
              target="_blank"
            >
              <LinkedIn width="23px" height="23px" />
            </a>
          </IconButton>
        </Box>
      </Box>
      <Box className="copyright bg-primary h-[45px] w-full flex items-center justify-center">
        <span className="text-xs text-off-white opacity-90">
          © {new Date().getFullYear()} DrLullaby. All rights reserved.
        </span>
      </Box>
    </Section>
  )
}

export default Footer
