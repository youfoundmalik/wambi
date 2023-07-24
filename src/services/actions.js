import Axios from "../config/Axios"

export const fetchAllStaff = async () => {
  try {
    const response = await Axios("/staffs?populate=*")
    const data = await response.data
    return data
  } catch (error) {}
}

export const fetchAllTestimonials = async () => {
  try {
    const response = await Axios("/testimonials?populate=*")
    const data = await response.data
    return data
  } catch (error) {}
}

export const fetchAllNews = async (page = 1) => {
  try {
    const response = await Axios(
      `/news-links?pagination[page]=${page}&pagination[pageSize]=12&populate=*`,
    )
    const data = await response.data
    return data
  } catch (error) {}
}

export const fetchAllBlogs = async (page = 1) => {
  try {
    const response = await Axios(
      `/blogs?pagination[page]=${page}&pagination[pageSize]=12&populate=*`,
    )
    const data = await response.data
    return data
  } catch (error) {}
}

export const fetchSingleBlog = async (id) => {
  try {
    const response = await Axios(`/blogs/${id}?populate=*`)
    const data = await response.data.data
    return data
  } catch (error) {}
}

export const fetchPrivacyPolicy = async () => {
  try {
    const response = await Axios("/privacy-policy")
    const data = await response.data
    return data
  } catch (error) {}
}

export const fetchTerms = async () => {
  try {
    const response = await Axios("/terms-condition")
    const data = await response.data
    return data
  } catch (error) {}
}
