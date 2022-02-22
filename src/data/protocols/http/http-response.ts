export enum HttpStatusCode {
  noContent = 204,
  forbidden = 403
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
