import { Box, Stack } from "@mui/material"

const Advisor = ({ width = "100%", img = "50%", onClick, staff, src }) => {
  return (
    <Box
      onClick={onClick}
      sx={{ width: width }}
      className={`advisor-container bg-white drop-shadow md:h-[180px] h-[150px] flex items-center rounded cursor-pointer ${
        staff?.bio ? "" : "pointer-events-none"
      }`}
    >
      <Box className="color-head h-full lg:w-[100px] w-[70px] bg-primary rounded-tl rounded-bl" />
      <Box
        component="img"
        src={staff?.photo?.data?.attributes?.url}
        alt={staff?.name}
        sx={{
          width: { xs: "110px", md: "140px" },
          height: { xs: "110px", md: "140px" },
          border: "3px solid #fff",
          borderRadius: "50%",
        }}
        className="my-auto ml-[-50px]"
      />
      <Stack alignItems="flex-start" className="content ml-[20px]">
        <p className="text-primary opacity-80 font-[500] text-[16px]">
          {staff?.name}
        </p>
        <p className="text-black opacity-70 text-[13px]">{staff?.degrees}</p>
        <span className="text-black text-left opacity-50 text-[12px] mt-[9px]">
          {staff?.position}
        </span>
        <hr className="mt-[5px] border-primary" />
      </Stack>
    </Box>
  )
}

export default Advisor
