import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component from '.'

export default {
  title: `atom/${Component.name}`,
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = args => (
  <Component {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button',
  size: 'large',
}
