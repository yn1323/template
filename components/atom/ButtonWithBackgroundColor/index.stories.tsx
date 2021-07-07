import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Component, { Props } from './'

export default {
  title: `atom/${Component.name}`,
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Component>

const Template: Story<Props> = args => <Component {...args} />

export const Yellow = Template.bind({})
Yellow.args = {
  backgroundColor: 'yellow',
  children: 'きいろ',
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: 'green',
  children: 'みどり',
}

export const Default = Template.bind({})
Default.args = {
  children: 'デフォルト',
}
