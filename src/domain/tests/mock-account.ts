import { AccountModel } from '../models/account-model'
import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'agsuperpoder@gmail.com',
  password: '12345'
})

export const mockAcconteModel = (): AccountModel => ({
  accessToken: '5646456547665765uhgfhfgh657865'
})
