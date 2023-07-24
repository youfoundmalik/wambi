import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  createSvgIcon,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import { useState } from "react"

import Section from "../shared/Section"
import CallToAction from "../shared/CallToAction"
import Image from "next/image"
import { images } from "@/utils/assets"

const RemoveIcon = createSvgIcon(<path d="M19 13H5v-2h14v2z" />, "Remove")

const AddIcon = createSvgIcon(
  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />,
  "Add",
)

const About = () => {
  const [expanded, setExpanded] = useState(0)
  const [open, setOpen] = useState({ more: false, why: false })

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleClickOpen = (prop) => {
    setOpen((prev) => ({ ...prev, [prop]: open }))
  }

  const handleClose = (prop) => {
    setOpen((prev) => ({ ...prev, [prop]: false }))
  }

  return (
    <Box id="about">
      <Section className="how-we-help-container md:py-[100px] py-[60px] relative">
        <Image
          src={images.metrics}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
        <Box className="overlay absolute w-full h-full left-0 top-0 z-[1]" />
        <Box className="content lg:w-[60%] md:w-[70%] relative z-[2]">
          <h3 className="sub-heading text-white opacity-95 md:mb-[40px] mb-[20px]">
            How we help
          </h3>
          <Stack gap="15px">
            <Accordion
              elevation={0}
              className="toggle"
              expanded={expanded === 0}
              onChange={handleChange(0)}
              square
              sx={{ my: "0px !important" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 0 ? (
                    <RemoveIcon sx={{ color: "#fff" }} />
                  ) : (
                    <AddIcon sx={{ color: "#fff" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="toggle-header"
              >
                <p className="text-white md:text-[17px] text-[15px] md:font-[600] font-[500]">
                  Cost
                </p>
              </AccordionSummary>
              <AccordionDetails className="toggle-body">
                <Box className="toggle-body-inner w-full text-white md:text-[16px] text-[14px] font-[400] my-[10px]">
                  <Stack gap="20px">
                    <Box>
                      <p className="font-[500]">Telehealth sessions:</p>
                      <ul>
                        <li>$160 per session</li>
                        <li>
                          We take insurance upfront in Illinois and Florida:
                          BCBS, Medicare, Aetna, UHC, Cign
                          <br />
                          <ul style={{ listStyleType: "circle" }}>
                            <li>
                              We require card on file for patient responsibility
                              costs - copay, coinsurance, deductibles
                            </li>
                          </ul>
                        </li>
                        <li>
                          For other states, patients are required to pay
                          upfront, but can submit to insurance for reimbursement
                          <br />
                          <ul style={{ listStyleType: "circle" }}>
                            <li>FSA/HSA can be used for payment</li>
                          </ul>
                        </li>
                      </ul>
                    </Box>
                    <Box>
                      <p className="font-[500]">Digital Membership:</p>
                      <ul>
                        <li>$19.99 billed monthly via card on file</li>
                        <li>
                          We require digital membership for all patients -{" "}
                          <p
                            className="underline text-secondary cursor-pointer"
                            onClick={() => handleClickOpen("why")}
                          >
                            Why?
                          </p>
                        </li>
                        <li>
                          Patients are allowed to cancel anytime, and can
                          request refund for any months where no sleep logs were
                          entered.
                          <br />
                          <ul style={{ listStyleType: "circle" }}>
                            <li>FSA/HSA can be used for payment</li>
                          </ul>
                        </li>
                      </ul>
                    </Box>
                  </Stack>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              className="toggle bg-opacity-[50%]"
              expanded={expanded === 1}
              onChange={handleChange(1)}
              square
              sx={{ my: "0px !important" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 1 ? (
                    <RemoveIcon sx={{ color: "#fff" }} />
                  ) : (
                    <AddIcon sx={{ color: "#fff" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="toggle-header"
              >
                <p className="text-white md:text-[17px] text-[15px] md:font-[600] font-[500]">
                  Types of Services Offered
                </p>
              </AccordionSummary>
              <AccordionDetails className="toggle-body">
                <Box className="toggle-body-inner w-full text-white md:text-[16px] text-[14px] font-[400] my-[10px]">
                  <ol style={{ listStyleType: "decimal" }}>
                    <li>Cognitive Behavioral Treatment for Insomnia (CBT-I)</li>
                    <li>CBT-I Alongside Sleep Medication Tapering</li>
                    <li>CBT for CPAP Adherence</li>
                    <li>CBT for Circadian Rhythm DIsorders</li>
                    <li>CBT for Inspire Acclimation</li>
                    <li>Imagery Rehearsal Therapy for Nightmare Disorder</li>
                  </ol>
                  <Button
                    onClick={() => handleClickOpen("more")}
                    color="secondary"
                    sx={{
                      mt: "20px",
                      px: "20px",
                      fontSize: { xs: "12px", md: "14px" },
                    }}
                    className="italic font-[500] w-max"
                  >
                    Read More
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              elevation={0}
              className="toggle bg-opacity-[50%]"
              expanded={expanded === 2}
              onChange={handleChange(2)}
              square
              sx={{ my: "0px !important" }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 2 ? (
                    <RemoveIcon sx={{ color: "#fff" }} />
                  ) : (
                    <AddIcon sx={{ color: "#fff" }} />
                  )
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="toggle-header"
              >
                <p className="text-white md:text-[17px] text-[15px] md:font-[600] font-[500]">
                  Our research support
                </p>
              </AccordionSummary>
              <AccordionDetails className="toggle-body">
                <Box className="toggle-body-inner w-full grid gap-[15px] text-white md:text-[14px] text-[14px] font-[400] my-[10px]">
                  <p>
                    Preliminary Clinical Outcomes from a Cohort of 75 Patients
                  </p>
                  <p> 49 Patients who Completed CBT-I</p>
                  <p>
                    {
                      "Total sleep time (TST) increased by 40 minutes from pretreatment (M=380 minutes, SD=87 minutes) to posttreatment (M=420 minutes, SD=81 minutes). This difference between pre-and-post- assessment TST was statistically significant (t(48) = -3.41, p < 0.001)."
                    }
                  </p>
                  <p>
                    {
                      "Sleep onset latency (SOL) decreased pretreatment (M=48 minutes, SD=43 minutes) to posttreatment (M=18 minutes, SD=18 minutes), which resulted in a significant difference between baseline and posttreatment (t(48) = 5.59, p < 0.001)."
                    }
                  </p>
                  <p>
                    {
                      "Wake after sleep onset [WASO] decreased from pretreatment (M=61 minutes, SD=44 minutes) to posttreatment (M=24 minutes, SD=23 minutes), a difference that was statistically significant (t(48) = 5.81, p < 0.001)."
                    }
                  </p>
                  <p>
                    {
                      "Sleep efficiency (SE) percent increased from baseline (M=72%, SD=16%) to posttreatment (M=87%, SD=8%). This increase in percent sleep efficiency was statistically significant (t(48) = -6.60, p <0.001). "
                    }
                  </p>
                  <p>
                    26 Patients who Completed CBT-I alongside Sleep Medication
                    Tapering
                  </p>
                  <p>
                    70% of sleep medication tapering patients were completely
                    tapered off of their original dose
                  </p>
                  <p>
                    100% of patients were down to at least half of their
                    original dose.
                  </p>
                  <p>
                    81% of patients were down to the last quarter of their
                    original dose.
                  </p>
                </Box>
              </AccordionDetails>
            </Accordion>
            <CallToAction
              transparent
              sx={{
                width: "fit-content",
                px: "40px",
                mt: "15px",
              }}
            />
          </Stack>
        </Box>
      </Section>
      <Section className="bg-primary py-[50px]">
        <Box className="grid md:grid-cols-3 gap-[10px]">
          <Box className="flex items-center">
            <h3 className="font-medium text-[20px] text-white opacity-95">
              Behavioral Sleep Medicine
              <br />
              Services Offered
            </h3>
          </Box>
          <Box>
            <ul className="text-off-white">
              <li className="text-[12px]">
                COGNITIVE BEHAVIORAL TREATMENT for INSOMNIA
              </li>
              <li className="text-[12px]">CBT for CPAP or INSPIRE ADHERENCE</li>
              <li className="text-[12px]">
                CBT for CIRCADIAN RHYTHM DISORDERS
              </li>
            </ul>
          </Box>
          <Box>
            <ul className="text-off-white">
              <li className="text-[12px]">
                SLEEP MEDICATION TAPERING ALINGSIDE CBT-I
              </li>
              <li className="text-[12px]">
                BEHAVIORAL TREATMENT for PEDIATRIC INSOMNIA
              </li>
              <li className="text-[12px]">IRT for NIGHTMARE DISORDER</li>
            </ul>
          </Box>
        </Box>
      </Section>
      <Dialog
        className="more-dialog accordion-dialog"
        fullWidth={true}
        maxWidth="md"
        open={open.more}
        onClose={() => handleClose("more")}
      >
        <DialogContent
          sx={{
            p: { xs: "0px 15px", md: "40px" },
            m: { xs: "25px 0px 0px", md: "0px" },
          }}
        >
          <Stack gap="20px">
            <p className="text-sm">
              We deliver Cognitive Behavioral Treatment for Insomnia (CBT-I)
              virtually by formally trained licensed professionals. Our patients
              complete telehealth sessions alongside digital health support.
              Patients learn research-backed changes that embody the first-line
              treatment recommended for reducing insomnia.
            </p>
            <p className="text-sm">
              {`The protocol typically includes 5-8 weekly or bi-weekly sessions.
              The average session is 1 hour. We are teaching ways to get better
              control over thoughts, behaviors and emotions to more effectively
              fall asleep and return to sleep. We assign "homework" or
              strategies to integrate from home, in between your sessions. It is
              like physical therapy, but for your sleep.`}
            </p>
            <p className="text-sm">
              {`While in the session with your provider, you will learn what
              research teaches about insomnia, and how best to make changes that
              align with what studies suggest. They will customize the treatment
              to meet the unique situation of each patient. The customization
              might be related to medical or mental health struggles
              contributing to sleep, or personal circumstances making your
              situation unique.`}
            </p>
            <p className="text-sm">
              {`In between sessions, patients stay engaged with their plan by
              reading more on each assignment and watching brief videos. Our
              patients also complete sleep logs daily to stay engaged. The
              providers can look at this data between sessions and you can
              message with your provider from our platform. The providers
              analyze your sleep data completed via sleep logs. This between
              session engagement and sleep log completion allows our patients to
              stay motivated and involved with their plan, and gives providers
              the data they need to put patients on the most customized and
              tailored plan.`}
            </p>
            <p className="text-sm">
              {`We also offer sleep medication tapering. While CBT-I is the
              first-line treatment recommended for insomnia, we often see that
              patients still end up on sleep medication first. We are able to
              help! Once approved by the prescribing physician, we can gradually
              taper patients off their sleep medications alongside CBT-I. These
              protocols are typically 8-10 sessions.`}
            </p>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: "40px", pb: "30px" }}>
          <Button sx={{ fontWeight: 400, px: "20px" }} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        className="why-dialog accordion-dialog"
        fullWidth={true}
        open={open.why}
        onClose={() => handleClose("why")}
      >
        <DialogContent
          sx={{
            p: { xs: "0px 15px", md: "40px" },
            m: { xs: "25px 0px 0px", md: "0px" },
          }}
        >
          <Stack gap="20px">
            <p className="">
              {`Our patients are required to sign up for digital membership so
              that our providers can readily view your sleep data during your
              session and between your visits.`}
            </p>
            <p className="">
              {`In between your telehealth sessions we have our patients watch
              videos with sleep lessons to stay engaged and motivated to change.
              Without this, we've seen that patients lose motivation to make
              sleep habit changes between sessions, forget the rationale for
              making changes and get frustrated trying to estimate sleep log
              information from memory. Digital tools support adherence and
              motivation to change sleep habits.`}
            </p>
          </Stack>
          <Box className="flex w-full justify-end md:mb-[0px] my-[30px]">
            <CallToAction gradient={false} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default About
