import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { GetRepositoriesParams } from '@/domain/usecases/get-repositories'

export class RemoteRepositories {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async search (params: GetRepositoriesParams): Promise<void> {
    await this.httpGetClient.get({
      url: this.url,
      name: params.name
    })
  }
}
