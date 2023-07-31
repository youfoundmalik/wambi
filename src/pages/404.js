import { Box, Button } from "@mui/material"
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter()

  return (
    <Box className="h-[50vh] flex flex-col items-center justify-center gap-[15px]">
      <h3 className="sub-heading text-primary opacity-95 ">
        {`This page doesn't seem to exist.`}
      </h3>
      <p className="text-black opacity-80 md:w-[75%] md:text-[16px] text-center text-sm mx-auto">
        It looks like the link pointing here was faulty.
      </p>
      <Button
        className="bg-primary"
        color="primary"
        variant="contained"
        disableElevation
        sx={{ height: "45px", px: "50px", mt: "15px" }}
        onClick={() => router.back()}
      >
        Go Back
      </Button>
    </Box>
  )
}

export default NotFound
