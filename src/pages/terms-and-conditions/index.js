import Head from "next/head"
import { Box } from "@mui/material"
import parse from "html-react-parser"
import TagManager from "react-gtm-module"
import { useContext, useEffect } from "react"

import { fetchIpAddress, fetchTerms } from "@/services/actions"
import PageHeader from "@/components/layout/PageHeader"
import Section from "@/components/shared/Section"
import AppContext from "@/store/context"

const TermsAndConditions = ({ ip, policy }) => {
  const ipCtx = useContext(AppContext)

  useEffect(() => {
    if (ip) {
      ipCtx.setIp(ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ip || ipCtx.ipAddress,
        userProject: "Dr.Lullaby-marketing",
        page: "Terms and Conditions",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className="container-box">
      <Head>
        <title>Terms and Conditions - DrLullaby</title>
        <link key="canonical" rel="canonical" href="/terms-and-conditions" />
      </Head>

      <PageHeader>Terms and Conditions</PageHeader>
      <Section className="md:my-[100px] lg:mx-[50px] my-[50px]">
        <Box className="drop-shadow bg-white border-2 border-off-white box-border rounded-[10px] lg:p-[50px] lg:pb-[80px] md:px-[20px] px-[10px] pt-[20px] pb-[40px]">
          <Box id="privacy-policy-details" className="rich-text text-black">
            {parse(`${policy || ""}`)}
          </Box>
        </Box>
      </Section>
    </Box>
  )
}

export async function getStaticProps() {
  const ipData = await fetchIpAddress()
  const policy = await fetchTerms()

  return {
    props: {
      policy: policy.data.attributes.body,
      ip: ipData.ip,
    },
    revalidate: 43200,
  }
}

export default TermsAndConditions
