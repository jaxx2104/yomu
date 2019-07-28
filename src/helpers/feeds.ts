import axios from "axios"
import { stringify } from "query-string"

import rss from "../assets/rss.json"
import { SearchResults, FetchResults } from "./interface/feeds"

export const fetch = (url: string): Promise<FetchResults> => {
  const baseUrl = "api/v3/streams/contents"
  const options = stringify({
    count: 100,
    streamId: "feed"
  })
  const query = encodeURIComponent(url)
  return axios.get(`${baseUrl}?${options}/${query}`)
}

export const fetchDummy = () => {
  return Promise.resolve(rss)
}

export const search = (query: string): Promise<SearchResults> => {
  const baseUrl = "api/v3/search/feeds"
  const options = stringify({
    count: 10,
    query: query
  })
  return axios.get(`${baseUrl}?${options}`)
}
