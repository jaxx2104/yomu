import { FetchResults, FetchItem, SearchResults } from "./interface/feeds"

export const search = (results: SearchResults) => {
  const feeds = results.data.results
  return feeds.map(feed => ({
    title: feed.title || "",
    url: (feed.feedId || "").replace(/^feed\//, "")
  }))
}

const items = (items: FetchItem[]) => {
  return items.map(item => {
    const result = {
      title: item.title.substr(0, 25) || "",
      link: item.alternate[0].href || "",
      content: (item.content || item.summary || { content: "" }).content,
      image: item.visual ? item.visual.url : ""
    }

    return result
  })
}

export const entries = (entries: FetchResults[]) => {
  return entries.map(entry => ({
    title: entry.data.title || "",
    link: entry.data.alternate[0].href || "",
    items: items(entry.data.items)
  }))
}
