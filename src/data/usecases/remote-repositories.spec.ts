/* import { GetRepositoriesParams } from '@/domain/usecases/get-repositories' */
import { HttpGetClientSpy } from '../test/mock-http-get-client'
import { RemoteRepositories } from './remote-repositories'

type SutTypes = {
  sut: RemoteRepositories
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteRepositories(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

/* const mockRepositories = (): GetRepositoriesParams => ({
  name: 'fabionascimento1'
}) */

describe('RemoteRepositories', () => {
  test('should be HttpGetClient with correct URL ', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search()
    expect(httpGetClientSpy.url).toBe(url)
  })

  /* test('should be HttGetClient with correct params', async () => {
    const getRepositoryParams = mockRepositories()
    const { sut, httpGetClientSpy } = makeSut()
    await sut.search(getRepositoryParams)
    expect(httpGetClientSpy.get.name).toEqual(getRepositoryParams)
  }) */
})
