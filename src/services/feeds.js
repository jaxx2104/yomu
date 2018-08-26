import axios from "axios"
import qs from "querystring"
import rss from "~/src/assets/rss.json"

export const getFeed = url => {
  const baseUrl = "https://query.yahooapis.com/v1/public/yql?"
  const options = qs.stringify({
    q: `select * from feednormalizer where output="atom_1.0" AND url in ('${url}')`,
    format: "json"
  })
  return axios.get(`${baseUrl}${options}`)
}

export const getFeedDummy = () => {
  return Promise.resolve(rss)
}
