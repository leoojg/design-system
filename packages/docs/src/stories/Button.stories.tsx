import { Button, ButtonProps } from '@design-system/react'
import type { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Sent',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}
