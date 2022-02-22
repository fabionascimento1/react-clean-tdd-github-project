import React from 'react'
import { render } from '@testing-library/react'
import Index from '.'

describe('', () => {
  test('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Index />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
