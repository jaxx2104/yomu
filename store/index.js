export const state = () => ({
  rss: {
    title: "title",
    link: "http://aaa.com",
    entry: []
  }
})

export const mutations = {
  SET_RSS(state, { title, entry, link }) {
    state.rss = { title, entry, link }
  }
}

export const actions = {
  setRss({ commit }, { title, entry, link }) {
    entry = entry.map(item => {
      const content = item.content.content
      item.title = item.title.substr(0, 25)
      item.image = content.match(/<img.*?src=("|')(.*?)("|').*?>/)[2]
      return item
    })
    commit("SET_RSS", { title, entry, link })
  }
}
