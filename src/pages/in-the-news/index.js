import Head from "next/head"
import TagManager from "react-gtm-module"
import { Box, LinearProgress, Pagination } from "@mui/material"
import { useCallback, useContext, useEffect, useState } from "react"

import PageHeader from "@/components/layout/PageHeader"
import { fetchAllNews, fetchIpAddress } from "@/services/actions"
import Section from "@/components/shared/Section"
import AppContext from "@/store/context"

const News = ({ data, ipData }) => {
  const ipCtx = useContext(AppContext)
  const [news, setNews] = useState(data?.data || [])
  const [page, setPage] = useState(data?.meta?.pagination?.page || 1)
  const [pagination, setPagination] = useState(data?.meta?.pagination || {})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (ipData) {
      ipCtx.setIp(ipData?.ip)
    }

    const tagManagerArgs = {
      dataLayer: {
        userId: ipData?.ip || ipCtx?.ipAddress || "",
        userProject: "Dr.Lullaby-marketing",
        page: "In the News",
      },
      dataLayerName: "PageDataLayer",
    }

    TagManager.dataLayer(tagManagerArgs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchNewsHandler = useCallback(async (page) => {
    setIsLoading(true)
    try {
      const response = await fetchAllNews(page)
      if (response) {
        setNews(response.data)
        setPage(response?.meta?.pagination?.page)
        setPagination(response?.meta?.pagination)
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handlePagination = (e, value) => {
    setPage(value)
    fetchNewsHandler(value)
  }
  return (
    <Box className="container-box">
      <Head>
        <title>Our Founder in the News - DrLullaby</title>
        <meta
          name="description"
          content="Some news articles that have featured our founder."
        />
        <link rel="canonical" href="/in-the-news" />
      </Head>
      {!isLoading && (
        <>
          <PageHeader>Our Founder in the News</PageHeader>
          {news?.length > 0 ? (
            <Section className="md:my-[100px] lg:mx-[100px] md:mx-[30px] my-[50px]">
              <Box className="blogs grid lg:grid-cols-3 md:grid-cols-2 gap-[50px]">
                {news?.map((post, i) => (
                  <ArticleCard key={i} post={post} />
                ))}
              </Box>
              {pagination?.pageCount > 1 && (
                <Pagination
                  sx={{
                    display: "grid",
                    justifyContent: "center",
                    mt: "50px",
                  }}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  count={pagination?.pageCount}
                  page={page}
                  onChange={handlePagination}
                />
              )}
            </Section>
          ) : (
            <Box className="flex flex-grow" />
          )}
        </>
      )}
      {isLoading && (
        <>
          <LinearProgress color="secondary" />
          <Box className="flex flex-grow" />
        </>
      )}
    </Box>
  )
}

export async function getStaticProps() {
  const ipData = await fetchIpAddress()
  const response = await fetchAllNews()

  return {
    props: {
      data: response || null,
      ipData: ipData || null,
    },
    revalidate: 43200,
  }
}

export default News

const ArticleCard = ({ post }) => {
  return (
    <a
      className="article-card-container w-full rounded-[10px] bg-white drop-shadow cursor-pointer"
      href={post?.attributes?.link}
      target="_blank"
    >
      <Box className="image-area w-full h-[180px] rounded-tl-[10px] rounded-tr-[10px]">
        <Box
          className="image bg-primary h-full w-full"
          sx={{
            backgroundImage: `url(${post?.attributes?.image?.data?.attributes?.url})`,
          }}
        />
      </Box>
      <Box className="details w-full pt-[15px] pb-[25px] flex items-start">
        <Box className="indicator min-h-[20px] bg-primary opacity-50" />
        <h2 className="text-black text-sm font-medium px-[10px] opacity-80">
          {post?.attributes?.title}
        </h2>
      </Box>
    </a>
  )
}
