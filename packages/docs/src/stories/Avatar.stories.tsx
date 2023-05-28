import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarProps } from "@ignite-ui/react"
import React from "react"

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/VivianeMayra.png",
    alt: "Viviane Mayra",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
