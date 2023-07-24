import { Box } from "@mui/material";

const Section = ({ className, id, sx, children, component = "section" }) => {
  return (
    <Box
      id={id}
      className={className}
      sx={{ position: "relative", ...sx }}
      component={component}
    >
      <Box className="inner-layout lg:px-[100px] md:px-[50px] px-[20px]">
        {children}
      </Box>
    </Box>
  );
};

export default Section;
