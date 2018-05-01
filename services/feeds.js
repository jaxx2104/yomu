import qs from "querystring"
import rss from "~/assets/rss.json"

export const getFeed = (axios, url) => {
  const baseUrl = "https://query.yahooapis.com/v1/public/yql?"
  const options = qs.stringify({
    q: `select * from feednormalizer where output="atom_1.0" AND url in ('${url}')`,
    format: "json"
  })
  return axios.$get(`${baseUrl}${options}`)
}

export const getFeedDummy = () => {
  return Promise.resolve(rss)
}
