export interface SearchResults {
  data: {
    results: {
      title: string
      feedId: string
    }[]
  }
}

export interface FetchResults {
  data: {
    title: string
    alternate: { href: string }[]
    items: FetchItem[]
  }
}

export interface FetchItem {
  title: string
  alternate: { href: string }[]
  content: {
    content: string
  }
  summary: string
}
