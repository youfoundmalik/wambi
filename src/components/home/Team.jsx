import {
  Box,
  createSvgIcon,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import { forwardRef, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { fetchAllStaff } from "../../services/actions";
import CallToAction from "../shared/CallToAction";
import Section from "../shared/Section";
import Clinician from "../staff/Clinician";
import Advisor from "../staff/Advisor";
import Leadership from "../staff/Leadership";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CloseIcon = createSvgIcon(
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />,
  "Close"
);

const Team = () => {
  const [open, setOpen] = useState(false);
  const [leadership, setLeadership] = useState([]);
  const [clinician, setClinician] = useState([]);
  const [advisor, setAdvisor] = useState([]);
  const [popup, setPopup] = useState(null);

  const filterRole = (dataArr, param) =>
    dataArr.data?.filter((staff) => staff?.attributes?.role === param) || [];

  const handleClickOpen = (prop) => {
    setPopup(prop);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPopup(null);
  };

  useEffect(() => {
    const getAllStaff = async () => {
      try {
        const response = await fetchAllStaff();
        if (response) {
          setLeadership(filterRole(response, "leadership"));
          setAdvisor(filterRole(response, "advisor"));
          setClinician(filterRole(response, "clinician"));
        }
      } finally {
      }
    };
    getAllStaff();
  }, []);

  return (
    <>
      <Section id="team" className="team-container text-center py-[20px]">
        <h3 className="sub-heading text-primary opacity-95 md:mb-[20px] mb-[10px]">
          Meet the DrLullaby Team
        </h3>
        <p className="text-black opacity-80 md:w-[75%] md:text-[16px] text-sm mx-auto">
          DrLullaby has a team of diverse professionals who work together to
          provide the best possible care for their patients.
          <br />
          Our team members are known for their expertise, compassion, and
          commitment to excellence in healthcare.
        </p>
        {leadership?.length > 0 && (
          <Box className="leadership">
            <Box className="md:my-[50px] my-[35px] w-full flex md:gap-[20px] gap-[10px] justify-center items-center">
              <hr className="w-[20%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
              <h4 className="text-primary md:text-[18px] font-[500]">
                Leadership
              </h4>
              <hr className="w-[20%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
            </Box>
            <Box className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[30px] md:w-full w-[80%] mx-[auto]">
              {leadership?.map((staff) => (
                <Leadership
                  key={staff?.id}
                  staff={staff?.attributes}
                  img="60%"
                  onClick={() => handleClickOpen(staff)}
                />
              ))}
            </Box>
          </Box>
        )}
        {clinician?.length > 0 && (
          <Box className="clinicians transition-[300ms]">
            <Box className="md:mt-[80px] mt-[50px] md:mb-[50px] mb-[30px] w-full flex md:gap-[20px] gap-[10px] justify-center items-center">
              <hr className="w-[30%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
              <h4 className="text-primary md:text-[18px] font-[500]">
                Clinicians
              </h4>
              <hr className="w-[30%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
            </Box>
            <Box className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:h-[460px] lg:gap-x-[50px] md:mx-[0px] mx-[20px] lg:gap-y-[10px] gap-y-[5px] gap-x-[15px]">
              {clinician?.map((staff) => (
                <Clinician
                  key={staff?.id}
                  staff={staff?.attributes}
                  onClick={() => handleClickOpen(staff)}
                />
              ))}
            </Box>
          </Box>
        )}
        {advisor?.length > 0 && (
          <Box className="advisors transition-[300ms]">
            <Box className="md:my-[50px] my-[30px] w-full flex md:gap-[20px] gap-[10px] justify-center items-center">
              <hr className="w-[20%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
              <h4 className="text-primary md:text-[18px] font-[500]">
                Advisors
              </h4>
              <hr className="w-[20%] border-2 border-primary opacity-70 md:flex-grow-0 flex-grow" />
            </Box>
            <Box className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-[30px] ">
              {advisor?.map((staff) => (
                <Advisor
                  key={staff?.id}
                  staff={staff?.attributes}
                  img="60%"
                  onClick={() => handleClickOpen(staff)}
                />
              ))}
            </Box>
          </Box>
        )}
        <Box className="w-full mx-auto md:mt-[80px] mt-[30px]">
          <CallToAction sx={{ px: "40px" }} />
        </Box>
      </Section>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className="staff-modal bg-primary bg-opacity-70"
        aria-describedby="staff-bio-modal"
      >
        <IconButton
          sx={{
            border: "1px solid #172955",
            position: "absolute",
            opacity: "50%",
          }}
          size="small"
          color="primary"
          onClick={handleClose}
          aria-label="close"
          className="z-[3] justify-self-end w-max md:right-[50px] md:top-[unset] right-[20px] top-[20px]"
        >
          <CloseIcon />
        </IconButton>
        <Box className="overlay absolute h-full w-full top-0 left-0 z-[1] opacity-60" />
        {popup && (
          <>
            <Box
              component="img"
              src={popup?.attributes?.photo?.data?.attributes?.url}
              alt={popup?.attributes?.name}
              sx={{
                width: { xs: "120px", md: "150px" },
                border: "5px solid #fff",
                borderRadius: "50%",
                height: "auto",
              }}
              className="modal-img absolute z-[3]"
            />
            <DialogTitle
              className="z-[2]"
              component="div"
              sx={{ lineHeight: "unset" }}
            >
              <Box className="grid gap-1 pb-[10px]">
                <p className="text-black md:text-[20px] text-[18px] opacity-80 font-[500]">
                  {popup?.attributes?.name}
                  <span className="text-black opacity-50 ml-[10px] text-[12px]">
                    {popup?.attributes?.degrees}
                  </span>
                </p>
                <span className="text-light opacity-50 font-normal text-[13px]">
                  {popup?.attributes?.position}
                </span>
                <hr className="border-2 w-[50%] border-primary opacity-70 mt-[10px] justify-self-end rounded" />
              </Box>
            </DialogTitle>
            <DialogContent className="modal-content z-[2]">
              <ReactMarkdown
                id="staff-dialog-description"
                className="markdown text-[15px] text-black"
              >
                {popup?.attributes?.bio}
              </ReactMarkdown>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Team;
