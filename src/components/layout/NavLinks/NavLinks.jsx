import { Box } from "@mui/material"
import Link from "next/link"

const NavLinks = ({ className = "", children }) => {
  return (
    <Box className={`header-links ${className}`}>
      <Link legacyBehavior href="/#home" scroll={false}>
        <a className="text-sm">Home</a>
      </Link>
      <Link legacyBehavior href="/#team" scroll={false}>
        <a className="text-sm">Team</a>
      </Link>
      <Link legacyBehavior href="/#about" scroll={false}>
        <a className="text-sm">About</a>
      </Link>
      <Link legacyBehavior href="/#docx" scroll={false}>
        <a className="text-sm">Referring Docs</a>
      </Link>
      {children}
    </Box>
  )
}

export default NavLinks
