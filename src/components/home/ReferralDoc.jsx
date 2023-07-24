import { Box, Button } from "@mui/material"
import { saveAs } from "file-saver"

import Section from "../shared/Section"
import Image from "next/image"
import { images } from "@/utils/assets"

const ReferralDoc = () => {
  const downloadImage = () => {
    saveAs(
      "https://drlullaby-marketing.s3.us-east-2.amazonaws.com/Patient_Flyer_5b7d8d9342.png",
      "Patient_Flyer.png",
    )
  }
  return (
    <Section
      id="docx"
      className="referral-container md:py-[100px] py-[60px] relative"
    >
      <Image
        src={images.computerBG}
        alt="background"
        layout="fill"
        objectFit="cover"
      />
      <Box className="overlay z-[1] absolute" />
      <Box className="referral-content relative z-[3] text-center mx-auto lg:w-[70%]">
        <Box className="flex flex-col items-center md:gap-[50px] gap-[25px]">
          <p
            className="text-off-white font-[500] opacity-90 md:text-[16px] underline w-fit text-[14px] cursor-pointer"
            onClick={downloadImage}
          >
            Printout for Patients
          </p>
          <Box className="letter bg-[#00000060] text-sm leading-[27px] w-full rounded-md h-[250px] md:px-[30px] px-[10px] md:py-[50px] py-[30px] text-white text-left">
            <p className="text-center font-bold italic text-secondary text-base mb-5 opacity-90 tracking-wide">
              A Letter from Our Founder
            </p>
            <h3 className="md:mb-[20px] mb-[10px] md:text-[18px] text-[16px] font-medium">
              Dear Colleagues,
            </h3>
            <Box className="flex flex-col gap-[10px]">
              <p>
                {` We have found that making a decision to start CBT-I can be
                challenging for many patients. As you already know, you can
                expect that your patients might present with skepticism when you
                bring up this referral suggestion. This is perfectly acceptable
                in our book! We expect patients to be skeptical. Here are some
                common examples of skepticism you likely hear:`}
              </p>
              <ul className="mt-[0px]">
                <li>
                  {`Patients want the quick-fix of a sleep medication, despite
                  understanding that CBT-I is the first-line recommendation.`}
                </li>
                <li>
                  {`Others fear the dependency and side effects, and while they do
                  not want to stay on a sleeping pill, they also fear not taking
                  it.`}
                </li>
                <li>
                  {`Patients feel they “know themselves” and have “tried
                  everything” so are resistant to the idea that someone can
                  help.`}
                </li>
                <li>
                  {`They do not feel comfortable having a licensed psychologist or
                  counselor help them, given that it's just a sleep issue
                `}
                </li>
              </ul>
              <p>
                From what we understand from theoretical principles pertaining
                to Stages of Change[
                <a
                  href="https://sphweb.bumc.bu.edu/otlt/mph-modules/sb/behavioralchangetheories/behavioralchangetheories6.html"
                  target="_blank"
                  className="text-secondary"
                >
                  {`Learn More about Stages of Change (Prochaska & DiClemente, 1970's)`}
                </a>
                ], resisting change, or contemplating change are very common
                parts of the cycle leading into readiness for change, and change
                behaviors.
              </p>
              <p>
                {`My ask of you, is that you let us help your patient through
                their skepticism, validate their resistance, and join with them
                where they are in their cycle of readiness for change. You can
                do this by letting your patient know that this is quite typical
                to have this resistance, and that our team is very skilled in
                talking through this. They are not obligated to complete the
                treatment, but if they can “put their foot in the door” and
                schedule the appointment, they are one step closer to having
                easier nights.`}
              </p>
              <p>
                {`We have seen consistently that patient’s motivation to change is
                highest when face-to-face with their doctor. Therefore, if you
                can also help your patient by encouraging your clinical staff or
                front staff to use our `}
                <b>Referral Team Scheduling Form</b>
                {`, the
                probability that they stay in the Stages of Change cycle,
                instead of losing them altogether, is highest.`}
              </p>
              <p>
                {`We recognize that asking your staff to make sure that patients
                have their Referral Team Scheduling Form completed that day, is
                challenging, and can feel like a burden. That said, this
                compared to having this patient return with sleep medication
                refill requests, or follow-up consultation about insomnia
                frustrations, can also be burdensome. Our goal for providing
                sleep centers with BSM support is to free up clinic slots and
                admin time for you, by taking care of any and all BSM needs.
                While I know this added task of requesting your team to help
                ensure that Referral Team Scheduling Form is filled out that
                day, is imperfect, in the long-run, this small task will open up
                more time and bigger changes for optimization of your clinics.
                We will continue working closely with each of you to learn
                exactly what new referral options will best serve the needs for
                your clinic. We look forward to moving more deeply into
                providing CPAP adherence support, and addressing COMISA needs.
                As always, please reach out with any questions. We are excited
                to continue working with your insomnia patients, sleep
                medication tapers, and the varied BSM referrals you have sent
                our way.`}
              </p>
              <p>Thank you for your support!</p>
            </Box>
            <Box className="mt-[30px]">
              <p>Lisa Medalie, PsyD, RPSGT, DBSM</p>{" "}
              <span className="italic text-xs text-[#cee9ff]">Founder</span>
            </Box>
          </Box>
          <Box className="w-full text-center">
            <a
              href="https://docs.google.com/forms/d/13tglhwA9d3c2Jy8cJ60SbDUn6y0RCVI5JoF8TZmKQ9U/viewform?edit_requested=true"
              target="_blank"
              className="w-fit inline-block h-max"
            >
              <Button
                variant="outlined"
                color="secondary"
                disableElevation
                className="h-[50px]"
                sx={{
                  px: "40px",
                  fontSize: "15px",
                  background: "#fff !important",
                  color: "#172955",
                  borderWidth: "3px",
                  borderRadius: "50px",

                  "&:hover": {
                    color: "#fff",
                    borderWidth: "3px",
                    background: "rgba(203, 160, 30, 0.04) !important",
                  },
                }}
              >
                Secure Referral Form
              </Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Section>
  )
}

export default ReferralDoc
