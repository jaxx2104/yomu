export interface Feed {
  url: string
}

export interface Select {
  row: number
  column: number
}

export interface Entry {
  items: {
    date: string
    content: string
    title: string
    image: string
    link: string
  }[]
}

export interface State {
  entries: Entry[]
  select: Select | null
}
