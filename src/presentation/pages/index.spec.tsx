import React from 'react'
import { render } from '@testing-library/react'
import Index from '.'

describe('', () => {
  test('Should start render with initial state', () => {
    const { getByTestId } = render(<Index />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
    const searchStatus = getByTestId('search-status')
    expect(searchStatus.title).toBe('Campo obrigatório')
    expect(searchStatus.textContent).toBe('🔴')
  })
})
