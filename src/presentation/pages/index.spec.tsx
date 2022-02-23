import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Index from '.'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object

  validate (input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Index validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('', () => {
  afterEach(cleanup)

  test('Should start render with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const searchStatus = sut.getByTestId('search-status')
    expect(searchStatus.title).toBe('Campo obrigatório')
    expect(searchStatus.textContent).toBe('🔴')
  })

  test('Should call validation with correct value', () => {
    const { sut, validationSpy } = makeSut()
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any' } })
    expect(validationSpy.input).toEqual({
      search: 'any'
    })
  })
})
