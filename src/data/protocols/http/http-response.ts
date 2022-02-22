export enum HttpStatusCode {
  noContent = 204,
  badRequest = 400,
  forbidden = 403
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
