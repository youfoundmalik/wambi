import { Button } from "@mui/material"

const CallToAction = ({
  gradient = false,
  sx,
  transparent = false,
  text = "Schedule Now",
  action,
  path = "https://app.drlullaby.com/#/schedule-form",
}) => {
  const outlined = {
    px: "25px",
    py: "10px",
    height: "unset",
    fontSize: "15px",
    background: "#fff !important",
    color: "#172955",
    borderWidth: "3px",
    borderRadius: "50px",
    "&:hover": {
      color: transparent ? "#fff" : "#172955",
      borderWidth: "3px",
      background: "rgba(203, 160, 30, 0.04) !important",
    },
    ...sx,
  }

  const contained = { px: "25px", fontSize: "15px", height: "45px", ...sx }

  const secondaryAction = () => {
    if (action) action()
  }

  return (
    <a
      href={path}
      target="_blank"
      className="w-fit inline-block h-max "
      onClick={secondaryAction}
    >
      <Button
        variant={gradient ? "contained" : "outlined"}
        disableElevation
        color={gradient ? "primary" : "secondary"}
        className={`${gradient ? "gradient-btn" : ""}`}
        sx={gradient ? contained : outlined}
      >
        {text}
      </Button>
    </a>
  )
}

export default CallToAction
