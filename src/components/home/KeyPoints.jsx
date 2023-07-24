import { icons } from "@/utils/assets"
import { Box } from "@mui/material"
import Coat from "../shared/icons/coat"
import Pill from "../shared/icons/pill"
import House from "../shared/icons/house"
import Microscope from "../shared/icons/microscope"

const KeyPoints = () => {
  const keyPointsArr = [
    {
      icon: <Coat className="md:w-[40px] w-[35px]" />,
      text: "Exclusive access to clinicians trained in sleep",
    },
    {
      icon: <Pill className="md:w-[40px] w-[35px]" />,
      text: "Alternative to sleep medications",
    },
    {
      icon: <House className="md:w-[40px] w-[35px]" />,
      text: "Convenient access from home",
    },
    {
      icon: <Microscope className="md:w-[40px] w-[35px]" />,
      text: "Research-supported Treatment",
    },
  ]
  return (
    <Box
      component="section"
      className="points-container relative mx-[auto] bg-white z-[2] text-center mt-[-50px] md:w-[90%] w-[95%]"
    >
      <Box className="overlay z-[1]" />
      <Box className="content relative z-[2] md:py-[50px] pt-[30px]">
        <h3 className="text-primary font-[500] opacity-90 md:text-[20px] md:mb-[35px] px-[10%] text-[16px] mb-[25px]">
          Function at your best each day with more sleep
        </h3>
        <Box className="points grid md:grid-cols-4 lg:mx-[8%] grid-cols-2 gap-y-[25px]">
          {keyPointsArr?.map((item, i) => (
            <Box
              key={i}
              className="point flex flex-col items-center gap-[10px]"
            >
              <Box className="icon-area rounded-[50%] w-[80px] h-[85px] ">
                <Box className="icon rounded-[50%] w-[80px] h-[80px] flex items-center justify-center bg-white">
                  {item.icon}
                </Box>
              </Box>
              <p className="font-[500] text-primary opacity-80 lg:mx-[12%] lg:text-[15px] mx-[10%] md:text-[14px] text-[13px]">
                {item.text}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default KeyPoints
