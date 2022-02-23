import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Index from '.'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Index />)
  return {
    sut
  }
}

describe('', () => {
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
})
