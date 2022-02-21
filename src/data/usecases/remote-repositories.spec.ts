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

describe('RemoteRepositories', () => {
  test('should be HttpGetClient with correct URL ', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
