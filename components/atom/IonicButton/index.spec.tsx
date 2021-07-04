import React from 'react'
import renderer from 'react-test-renderer'
import IonicButton from '.'

test('AppTitle', () => {
  const component = renderer.create(<IonicButton />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
