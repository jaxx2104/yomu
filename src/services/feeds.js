import axios from "axios"
import qs from "querystring"
import rss from "~/src/assets/rss.json"

export const get = url => {
  const baseUrl = "api/v3/streams/contents"
  const options = qs.stringify({
    count: 100,
    streamId: "feed"
  })
  const query = encodeURIComponent(url)
  return axios.get(`${baseUrl}?${options}/${query}`)
}

export const getDummy = () => {
  return Promise.resolve(rss)
}

export const search = query => {
  const baseUrl = "api/v3/search/feeds"
  const options = qs.stringify({
    count: 10,
    query: query
  })
  return axios.get(`${baseUrl}?${options}`)
}
