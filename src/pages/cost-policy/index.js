import Head from "next/head"
import { Box } from "@mui/material"
import { useContext, useEffect } from "react"
import TagManager from "react-gtm-module"

import PageHeader from "@/components/layout/PageHeader"
import { fetchIpAddress } from "@/services/actions"
import Section from "@/components/shared/Section"
import AppContext from "@/store/context"

const CostPolicy = ({ ip }) => {
  const ipCtx = useContext(AppContext)

  useEffect(() => {
    if (ip) {
      ipCtx.setIp(ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ip || ipCtx.ipAddress,
        userProject: "Dr.Lullaby-marketing",
        page: "Cost Policy",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className="container-box">
      <Head>
        <title>Cost Transparency Policy - DrLullaby</title>
        <link key="canonical" rel="canonical" href="/cost-policy" />
      </Head>

      <PageHeader>Cost Transparency Policy</PageHeader>
      <Section className="md:my-[100px] lg:mx-[50px] my-[50px]">
        <Box className="drop-shadow bg-white border-2 border-off-white box-border rounded-[10px] lg:p-[50px] lg:pb-[80px] md:px-[20px] px-[10px] pt-[20px] pb-[40px]">
          <p>
            We are committed to providing you with quality health care. Your
            clear understanding of our Cost Transparency Policy is important to
            our professional relationship. Please understand that payment for
            services is a part of that relationship. Please contact us if you
            have any questions about our fees, our policies, or your
            responsibilities.
          </p>
          <ol
            style={{ listStyleType: "numeric" }}
            className="flex flex-col gap-[20px]"
          >
            <li className="font-medium">
              Card on File Policy
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>100% of patients must have a card on file.</li>
                <li>
                  {`They will provide this card during virtual check-in, before
                    entering the "virtual room" with their doctor`}
                </li>
                <li>
                  Patients must have their card ready at the time of their first
                  session.
                </li>
              </ol>
            </li>
            <li className="font-medium">
              Cost Transparency
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>Only items below will be charged.</li>
                <li>
                  Our team is readily available if you ever have questions about
                  charges.
                </li>
                <li>
                  We take charges VERY seriously and are on top of every
                  question you have.
                </li>
                <li>
                  We make sure all patient questions are immediately attended to
                  and fairly resolved.
                </li>
              </ol>
            </li>
            <li className="font-medium">
              Financial Challenges
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>
                  If any patient can not afford the costs below, proof of
                  financial challenges can be provided, and our team can offer a
                  sliding scale.
                </li>
              </ol>
            </li>
            <li className="font-medium">
              No/Show and Less than 24hr Cancellation Charge
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>
                  Once you have scheduled an appointment with us, we expect that
                  you will join that session.
                </li>
                <li>
                  If you can not make that session, we expect you to contact our
                  team via phone or email, or virtual cancellation at least 24
                  hours ahead of time.
                </li>
                <li>
                  If you do not show, or cancel within 24 hours, you will be
                  charged $100, no exception.
                </li>
              </ol>
            </li>
            <li className="font-medium">
              Telehealth Cost
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>
                  Patients in Illinois or Florida, with BCBS, Medicare, Aetna,
                  UHC or Cigna
                  <ol
                    style={{ listStyleType: "numeric" }}
                    className="font-normal mt-[10px]"
                  >
                    <li>
                      Patients are responsible for copay, coinsurance and
                      deductible payments - these are amounts that patients
                      agreed to pay as part of their insurance contract.
                    </li>
                    <li>
                      Card on file will be charged the day of your service for
                      any amounts $100 or below.
                    </li>
                    <li>
                      For amounts $100 or more, we will contact you first, then
                      your card will be charged the day of your service.
                    </li>
                    <li>
                      You will ALWAYS get a statement about all charges so that
                      you clearly understand why you are charged.
                    </li>
                    <li>
                      Our team is always available with any questions about
                      charge amounts, and of course you can also call your
                      insurance company
                    </li>
                  </ol>
                </li>
                <li>
                  Patients NOT in Illinois or Florida, with BCBS, Medicare,
                  Aetna, UHC or Cigna
                  <ol
                    style={{ listStyleType: "numeric" }}
                    className="font-normal mt-[10px]"
                  >
                    <li>$160 per session upfront.</li>
                    <li>HSA/FSA can be used to pay.</li>
                    <li>
                      Sliding scale is available when proof of financial
                      challenges is provided.
                    </li>
                    <li>
                      Card on file will be charged the same day of your service.
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
            <li className="font-medium">
              DrLullaby Digital Membership
              <ol
                style={{ listStyleType: "numeric" }}
                className="font-normal mt-[15px]"
              >
                <li>All patients pay $19.99/mo out of pocket.</li>
                <li>HSA/FSA can be used to pay.</li>
                <li>
                  Sliding scale is available when proof of financial challenges
                  is provided.
                </li>
                <li>
                  Card on file will be charged 1mo - first charge is taken at
                  the time of your first telehealth session during your
                  check-in; check-in occurs right before you join your doctor in
                  the telehealth session.
                </li>
                <li>
                  About the Digital Membership:
                  <ol
                    style={{ listStyleType: "numeric" }}
                    className="font-normal mt-[10px]"
                  >
                    <li>
                      Our patients are required to sign up for digital
                      membership so that our providers can readily view your
                      sleep data during your session and between your visits.
                    </li>
                    <li>
                      {`In between your telehealth sessions we have our patients
                        watch videos with sleep lessons to stay engaged and
                        motivated to change. Without this, we've seen that
                        patients lose motivation to make sleep habit changes
                        between sessions, forget the rationale for making
                        changes and get frustrated trying to estimate sleep log
                        information from memory. Digital tools support adherence
                        and motivation to change sleep habits.`}
                    </li>
                  </ol>
                </li>
                <li>
                  Benefits:
                  <ol
                    style={{ listStyleType: "numeric" }}
                    className="font-normal mt-[10px]"
                  >
                    <li>
                      Dr. Medalie has learned from her patients about the
                      inefficiencies of doing digital health without telehealth,
                      or telehealth without digital health.
                    </li>
                    <li>
                      Digital Health Without Telehealth: Her patients have told
                      her that when they tried digital health tools (e.g.,
                      self-guided apps) without the support of a live doctor,
                      they felt they did not receive customization to their
                      unique situation. Aspects of their medical history, mood
                      profile, family situation, medication list, etc were not
                      factored into their plan, and this inhibited their
                      progress.
                    </li>
                    <li>
                      Telehealth without Digital Health: Dr. Medalie also
                      noticed when she saw patients for telehealth visits with
                      nothing to use between sessions, this also was
                      problematic. Her patients seemed very motivated and
                      excited to make change when they were in the telehealth
                      session, but in between sessions they lost motivation!
                      Life happened, they forgot or they got directed elsewhere.
                      The digital health tools in between telehealth sessions
                      keeps patients engaged in the sleep plan and this supports
                      adherence and reduces insomnia.
                    </li>
                    <li>
                      DrLullaby is on the cutting edge with the unique and
                      innovative approach, offering the marriage between digital
                      health and telehealth.
                    </li>
                  </ol>
                </li>
                <li>Cancellation: You can cancel anytime</li>
                <li>
                  Refund: If you refuse to use the digital membership, and we
                  can verify it was not used, we can refund your payment
                </li>
              </ol>
            </li>
          </ol>
        </Box>
      </Section>
    </Box>
  )
}

export async function getStaticProps() {
  const ipData = await fetchIpAddress()

  return {
    props: {
      ip: ipData.ip,
    },
    revalidate: 43200,
  }
}

export default CostPolicy
