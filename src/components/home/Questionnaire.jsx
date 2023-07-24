import { useState } from "react";
import { Box, Dialog, DialogContent, DialogContentText } from "@mui/material";

import CallToAction from "../shared/CallToAction";
import VideoPlayer from "../shared/VideoPlayer";

const Questionnaire = () => {
  const [isOpen, setIsOpen] = useState(false);

  const questions = [
    "Trouble falling asleep",
    "Trouble returning to sleep",
    "Don't want to take a sleeping pill",
    "Trouble with CPAP",
    "Other",
  ];

  const triggerModal = (prop) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box className="questionnaire grid gap-7">
        <p className="font-[700] text-off-white md:text-[45px] md:leading-[60px] text-[26px]">
          What is bothering you about sleep?
        </p>
        <Box className="flex flex-wrap gap-3">
          {questions.map((item, i) => (
            <p
              key={i}
              className="bg-white bg-opacity-20 px-8 py-3 rounded-[50px] text-sm text-off-white border border-solid border-secondary cursor-pointer | hover:bg-primary hover:bg-opacity-80"
              onClick={() => triggerModal(item)}
            >
              {item}
            </p>
          ))}
        </Box>
      </Box>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        fullWidth
        aria-labelledby="questionnaire-dialog-title"
        aria-describedby="questionnaire-dialog-description"
        sx={{
          ".MuiPaper-root": {
            width: { xs: "100%", md: "unset" },
            margin: { xs: "10px", md: "unset" },
          },
        }}
      >
        <DialogContent sx={{ px: { xs: "15px", md: "25px" } }}>
          <Box className="w-full text-center flex flex-col gap-2">
            <p className="text-xs text-secondary">Learn more, watch video</p>
            <VideoPlayer
              controls
              url="https://drlullaby-marketing.s3.us-east-2.amazonaws.com/material/DrLullaby+Learn+More+(Schedule+Now)_2.mp4"
            />
            <Box sx={{ mt: "20px", alignSelf: "center" }}>
              <CallToAction text="Continue to schedule" action={closeModal} />
            </Box>
          </Box>
          <DialogContentText
            sx={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: { xs: "12px", md: "14px" },
              color: "#777",
            }}
            id="questionnaire-dialog-description"
          >
            We take many insurance plans in Illinois and Florida.
            <br />
            Call{" "}
            <a className="text-[#167feb] font-medium" href="tel:844-475-3379">
              844-4SLEEPY
            </a>{" "}
            with insurance questions. You will pay $19.99/mo for the digital
            companion.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Questionnaire;
