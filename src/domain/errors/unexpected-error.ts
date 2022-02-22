export class UnexpectedError extends Error {
  constructor () {
    super('Aconteceu algum erro inexperado. Tente mais tarde ...')
    this.name = 'UnexpectedError'
  }
}
