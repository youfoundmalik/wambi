import { Box, Stack } from "@mui/material"

const Leadership = ({ width = "100%", img = "50%", onClick, staff }) => {
  return (
    <Box
      onClick={onClick}
      sx={{ width: width }}
      className={`leadership-container bg-white drop-shadow rounded cursor-pointer ${
        staff?.bio ? "" : "pointer-events-none"
      }`}
    >
      <Box className="color-head w-full h-[80px] bg-primary rounded-tl rounded-tr" />
      <Box
        component="img"
        src={staff?.photo?.data?.attributes?.url}
        alt={staff?.name}
        sx={{
          width: img,
          border: "3px solid #fff",
          borderRadius: "50%",
          height: "auto",
        }}
        className="mx-auto mt-[-50px]"
      />
      <Stack
        alignItems="center"
        className="content lg:h-[105px] md:p-[20px] p-[10px] pt-[10px]"
      >
        <p className="text-primary opacity-80 font-[500] text-[16px]">
          {staff?.name}
        </p>
        <p className="text-black opacity-70 text-[13px]">
          {staff?.degrees || ""}
        </p>
        <span className="text-black opacity-50 text-[12px] mt-[9px]">
          {staff?.position}
        </span>
        <hr className="mt-[5px] border-primary" />
      </Stack>
    </Box>
  )
}

export default Leadership
