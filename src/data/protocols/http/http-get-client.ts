import { HttpResponse } from './http-response'

export type HttpGetParams = {
  url?: string
  name?: string
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<HttpResponse>
}
