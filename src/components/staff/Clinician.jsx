import { Box, Stack } from "@mui/material"

const Clinician = ({ onClick, staff }) => {
  return (
    <Box
      className={`clinician-container w-full cursor-pointer ${
        staff?.bio ? "" : "pointer-events-none"
      }`}
      onClick={onClick}
    >
      <Box className="image-area mx-auto rounded-[50%] relative overflow-hidden">
        <Box
          component="img"
          src={staff?.photo?.data?.attributes?.url}
          alt={staff?.name}
          sx={{ width: "100%", borderRadius: "50%", height: "auto" }}
        />
        <Box className="overlay absolute bottom-0 w-full bg-off-white bg-opacity-95 text-center">
          <p className="text-black opacity-75 text-xs font-[500]">
            {staff?.name}
          </p>
          <p className="text-black opacity-50 text-[10px] mt-[3px]">
            {staff?.degrees}
          </p>
        </Box>
      </Box>
      <Stack
        alignItems="center"
        gap="3px"
        className="content pb-[20px] pt-[10px]"
      >
        <p className="text-primary text-sm opacity-80 font-[500] cursor-pointer">
          {staff?.name}
        </p>
        <p className="text-black opacity-70 text-[12px]">{staff?.degrees}</p>
      </Stack>
    </Box>
  )
}

export default Clinician
