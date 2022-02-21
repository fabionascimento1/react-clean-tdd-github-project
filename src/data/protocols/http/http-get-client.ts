export interface HttpGetClient {
  get: (url: string, repository?: string) => Promise<void>
}
