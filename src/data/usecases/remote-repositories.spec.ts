import { HttpGetClientSpy } from '@/data/test/mock-http-get-client'
import { mockRepositories } from '@/data/test/mock-repositories'
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
    await sut.search(mockRepositories())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('should be HttGetClient with correct params', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const GetParams = mockRepositories()
    await sut.search(GetParams)
    expect(httpGetClientSpy.name).toEqual(GetParams.name)
  })
})
