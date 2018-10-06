import get from "lodash/get"

export const search = results => {
  results = get(results, "data.results")
  return results.map(entry => {
    return {
      title: get(entry, "title") || "",
      url: (get(entry, "feedId") || "").replace(/^feed\//, "")
    }
  })
}

export const entries = entries => {
  return entries.map(entry => {
    return {
      title: get(entry, "data.title") || "",
      link: get(entry, "data.alternate[0].href") || "",
      items: formatItems(get(entry, "data.items"))
    }
  })
}

const formatItems = items => {
  return items.map(item => {
    const result = {
      title: get(item, "title").substr(0, 25) || "",
      link: get(item, "alternate[0].href") || "",
      content:
        get(item, "content.content") || get(item, "summary.content") || ""
    }
    /* 画像の取得 */
    const pattern = /<img.*?src=("|')(.*?)("|').*?>/
    if (result.content && result.content.match(pattern)) {
      result.image = result.content.match(pattern)[2]
      result.content.replace(pattern, "")
    }
    return result
  })
}
