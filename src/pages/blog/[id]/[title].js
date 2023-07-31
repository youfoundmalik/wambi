import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { Box, LinearProgress } from "@mui/material"
import TagManager from "react-gtm-module"
import ReactMarkdown from "react-markdown"

import {
  fetchAllBlogs,
  fetchIpAddress,
  fetchSingleBlog,
} from "@/services/actions"
import AppContext from "@/store/context"
import Section from "@/components/shared/Section"
import PageHeader from "@/components/layout/PageHeader"
import { trimURL, truncateText } from "@/utils/helperFunctions"

const SingleBlog = ({ ipData, blogData }) => {
  const router = useRouter()
  const ipCtx = useContext(AppContext)
  const { id, title } = router.query

  useEffect(() => {
    if (ipData) {
      ipCtx.setIp(ipData?.ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ipData?.ip || ipCtx?.ipAddress || "",
        userProject: "Dr.Lullaby-marketing",
        page: blogData?.attributes?.title + "(single blog)",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box className="container-box">
      <Head>
        <title>{`${blogData?.attributes?.title}`} - DrLullaby</title>
        <meta
          property="og:image"
          content={`${blogData?.attributes?.image?.data?.attributes?.url}`}
        />
        <link rel="canonical" href={`/${id}/${title}`} />
        <meta property="og:title" content={blogData?.attributes?.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.drlullaby.com/${id}/${title}`}
        />
        <meta
          name="description"
          content={truncateText(blogData?.attributes?.content, 100)?.replace(
            /#/g,
            "",
          )}
        />
        <meta
          property="og:description"
          content={truncateText(blogData?.attributes?.content, 40)}
        />
      </Head>
      {!blogData && (
        <>
          <LinearProgress color="secondary" />
          <Box className="flex flex-grow" />
        </>
      )}
      {blogData ? (
        <>
          <PageHeader
            image={blogData?.attributes?.image?.data?.attributes?.url}
            sx={{ py: { xs: "100px", md: "150px" } }}
          >
            {blogData?.attributes?.title}
          </PageHeader>
          <Section className="md:my-[100px] lg:mx-[50px] my-[50px]">
            <Box className="drop-shadow bg-white border-2 border-off-white box-border rounded-[10px] lg:p-[50px] lg:pb-[80px] md:px-[20px] px-[10px] pt-[20px] pb-[40px]">
              <ReactMarkdown
                id="privacy-policy-details"
                className="markdown text-black"
              >
                {blogData?.attributes?.content}
              </ReactMarkdown>
            </Box>
          </Section>
        </>
      ) : (
        <Box className="flex flex-grow" />
      )}
    </Box>
  )
}

export async function getStaticProps({ params }) {
  const id = params?.id
  const title = params?.title
  const ipData = await fetchIpAddress()
  const response = await fetchSingleBlog(id)

  if (!response) {
    return { notFound: true }
  }

  if (trimURL(response?.attributes?.title) !== title) {
    return { notFound: true }
  }

  return {
    props: {
      blogData: response || null,
      ipData: ipData || null,
    },
  }
}

export async function getStaticPaths() {
  const response = await fetchAllBlogs()

  const parameters = await response?.data?.map((post) => ({
    params: {
      id: post?.id?.toString(),
      title: trimURL(post?.attributes?.title),
    },
  }))

  return {
    paths: parameters,
    fallback: true,
  }
}
export default SingleBlog
