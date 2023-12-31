import Head from "next/head"
import { Box } from "@mui/material"
import parse from "html-react-parser"
import TagManager from "react-gtm-module"
import { useContext, useEffect } from "react"

import { fetchIpAddress, fetchPrivacyPolicy } from "@/services/actions"
import PageHeader from "@/components/layout/PageHeader"
import Section from "@/components/shared/Section"
import AppContext from "@/store/context"

const PrivacyPolicy = ({ policyData, ipData }) => {
  const ipCtx = useContext(AppContext)

  useEffect(() => {
    if (ipData) {
      ipCtx.setIp(ipData?.ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ipData?.ip || ipCtx?.ipAddress || "",
        userProject: "Dr.Lullaby-marketing",
        page: "Privacy Policy",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box className="container-box">
      <Head>
        <title>Privacy Policy - DrLullaby</title>
        <link key="canonical" rel="canonical" href="/privacy-policy" />
      </Head>

      <PageHeader>Privacy Policy</PageHeader>
      <Section className="md:my-[100px] lg:mx-[50px] my-[50px]">
        {policyData && (
          <Box className="drop-shadow bg-white border-2 border-off-white box-border rounded-[10px] lg:p-[50px] lg:pb-[80px] md:px-[20px] px-[10px] pt-[20px] pb-[40px]">
            <Box id="privacy-policy-details" className="rich-text text-black">
              {parse(`${policyData?.data?.attributes?.body || ""}`)}
            </Box>
          </Box>
        )}
      </Section>
    </Box>
  )
}

export async function getStaticProps() {
  const ipData = await fetchIpAddress()
  const policyData = await fetchPrivacyPolicy()

  return {
    props: {
      policyData: policyData || null,
      ipData: ipData || null,
    },
    revalidate: 43200,
  }
}

export default PrivacyPolicy
