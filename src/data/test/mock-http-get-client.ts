import { HttpGetClient, HttpGetParams } from '@/data/protocols/http/http-get-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  name?: string
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    this.name = params.name
    return Promise.resolve(this.response)
  }
}
