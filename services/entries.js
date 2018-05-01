export const pickEntries = entries => {
  return entries.map(result => {
    const { title, link, entry } = result.query.results.feed
    return { title, link, entry }
  })
}

export const formatEntries = entries => {
  return entries.map(entry => {
    entry.entry = entry.entry.map(item => {
      const { content } = item.content || item.summary || ""
      item.title = item.title.substr(0, 25)
      item.content = content
      if (content && content.match(/<img.*?src=("|')(.*?)("|').*?>/)) {
        item.image = content.match(/<img.*?src=("|')(.*?)("|').*?>/)[2]
      }
      return item
    })
    return entry
  })
}
