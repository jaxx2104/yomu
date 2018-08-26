export const formatEntries = entries => {
  entries = entries.map(result => {
    /* eslint-disable */
    const data = result.data || result
    const { title, link, entry } = data.query.results.feed
    return { title, link, entry }
  })
  return entries.map(entry => {
    entry.entry = entry.entry.map(item => {
      const { content } = item.content || item.summary || ""
      item.title = item.title.substr(0, 25)
      item.link = item.link ? item.link.href : ""
      item.content = content
      if (content && content.match(/<img.*?src=("|')(.*?)("|').*?>/)) {
        item.content = content.replace(/<img.*?src=("|')(.*?)("|').*?>/, "")
        item.image = content.match(/<img.*?src=("|')(.*?)("|').*?>/)[2]
      }
      return item
    })
    return entry
  })
}
