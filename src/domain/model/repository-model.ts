export interface RespositoriesModel {
  pageable: any
  data: RepositoryModel[]
}
export interface RepositoryModel {
  name: string
  description?: string
  html_url: string
  stars: number
  forks: number
  watchers: number
  owner?: string
}
