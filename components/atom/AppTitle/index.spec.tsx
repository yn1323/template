import React from 'react'
import renderer from 'react-test-renderer'
import { square } from './scripts'
import AppTitle from '.'

test('AppTitle', () => {
  const component = renderer.create(<AppTitle />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

describe('Sample.ts Functions TestCases', () => {
  it('should return the squared value', () => {
    const result = square(2)
    const expected = 4

    expect(result).toStrictEqual(expected)
  })
})
