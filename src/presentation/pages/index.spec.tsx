import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Index from '.'
import { ValidationSpy } from '@/presentation/test/mock-validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  validationSpy.errorMessage = 'Error Message'
  const sut = render(<Index validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('', () => {
  afterEach(cleanup)

  test('Should start render with initial state', () => {
    const { sut, validationSpy } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const searchStatus = sut.getByTestId('search-status')
    expect(searchStatus.title).toBe(validationSpy.errorMessage)
    expect(searchStatus.textContent).toBe('🔴')
  })

  test('Should call validation with correct value', () => {
    const { sut, validationSpy } = makeSut()
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any_search' } })
    expect(validationSpy.fieldName).toBe('search')
    expect(validationSpy.fieldValue).toBe('any_search')
  })

  test('Should show search error if Validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any_search' } })
    const searchStatus = sut.getByTestId('search-status')
    expect(searchStatus.title).toBe(validationSpy.errorMessage)
    expect(searchStatus.textContent).toBe('🔴')
  })

  test('Should show valid search state if Validation succeeds', () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.errorMessage = null
    const searchInput = sut.getByTestId('search')
    fireEvent.input(searchInput, { target: { value: 'any_search' } })
    const searchStatus = sut.getByTestId('search-status')
    expect(searchStatus.title).toBe('Tudo certo!')
    expect(searchStatus.textContent).toBe('🟢')
  })
})
