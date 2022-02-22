import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { GetRepositoriesParams } from '@/domain/usecases/get-repositories'
import { HttpStatusCode } from '../protocols/http/http-response'

export class RemoteRepositories {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async search (params: GetRepositoriesParams): Promise<void> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      name: params.name
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
