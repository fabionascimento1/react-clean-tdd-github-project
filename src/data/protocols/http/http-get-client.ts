export type HttpGetParams = {
  url?: string
  name?: string
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<void>
}
